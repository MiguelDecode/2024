import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'
import { Calculator } from '../src/Calculator'

describe('Tests on Calculator', () => {
  afterEach(cleanup)

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const operations = ['+', '-', '*', '/']

  test('Should render the component', () => {
    render(<Calculator />)
  })

  test('should render title correctly', () => {
    render(<Calculator />)

    expect(screen.getByText('Calculator')).toBeTruthy()
  })

  test('should render numbers', () => {
    render(<Calculator />)

    numbers.forEach((num) => screen.getByText(num))
  })

  test('should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')

    expect(rows).toHaveLength(4)
  })

  test('should render operations', () => {
    render(<Calculator />)

    operations.forEach((operation) => {
      screen.getByText(operation)
    })
  })

  test('should render equal sign', () => {
    render(<Calculator />)

    screen.getByText('=')
  })

  test('should render an input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  test('should user input after clicking a number', () => {
    render(<Calculator />)

    const oneElement = screen.getByText('1')
    fireEvent.click(oneElement)

    const inputElement = screen.getByRole('textbox')

    expect(inputElement.value).toBe('1')
  })

  test('should user input after clicking several numbers', () => {
    render(<Calculator />)

    const oneElement = screen.getByText('1')
    fireEvent.click(oneElement)

    const twoElement = screen.getByText('2')
    fireEvent.click(twoElement)

    const threeElement = screen.getByText('3')
    fireEvent.click(threeElement)

    const inputElement = screen.getByRole('textbox')

    expect(inputElement.value).toBe('123')
  })

  test('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const oneElement = screen.getByText('1')
    fireEvent.click(oneElement)

    const plusElement = screen.getByText('+')
    fireEvent.click(plusElement)
    fireEvent.click(oneElement)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement.value).toBe('1+1')
  })

  test('should calculated based on user input and show the result', () => {
    render(<Calculator />)

    const oneElement = screen.getByText('1')
    fireEvent.click(oneElement)

    const plusElement = screen.getByText('+')
    fireEvent.click(plusElement)
    fireEvent.click(oneElement)

    const equalElement = screen.getByText('=')
    fireEvent.click(equalElement)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement.value).toBe('2')
  })

  test('should calculated based on user input and show the result using the result of a before calculate', () => {
    render(<Calculator />)

    const oneElement = screen.getByText('1')
    fireEvent.click(oneElement)

    const plusElement = screen.getByText('+')
    fireEvent.click(plusElement)
    fireEvent.click(oneElement)

    const equalElement = screen.getByText('=')
    fireEvent.click(equalElement)

    fireEvent.click(plusElement)
    fireEvent.click(oneElement)

    fireEvent.click(equalElement)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement.value).toBe('3')
  })
})
