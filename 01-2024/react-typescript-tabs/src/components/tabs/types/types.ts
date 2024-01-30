export interface TabItem {
  id: string;
  title: string;
  content: () => JSX.Element; // Return a react component as content of the tab
}