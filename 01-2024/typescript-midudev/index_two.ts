// Types from QuickTypes
export type GitHubAPIResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
};

export type Item = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: null | string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: Language | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: Visibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: DefaultBranch;
  score: number;
};

export enum DefaultBranch {
  Dev = "dev",
  Main = "main",
  Master = "master",
}

export enum Language {
  CSS = "CSS",
  HTML = "HTML",
  JavaScript = "JavaScript",
  ObjectiveC = "Objective-C",
  TypeScript = "TypeScript",
}

export type License = {
  key: string;
  name: string;
  spdx_id: string;
  url: null | string;
  node_id: string;
};

export type Owner = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
};

export enum Type {
  Organization = "Organization",
  User = "User",
}

export enum Visibility {
  Public = "public",
}

// TUPLAS

type RGB2 = readonly [number, number, number];

const black: RGB2 = [0, 0, 0];
const white: RGB2 = [255, 255, 255];

// black.push(4);

// ENUM

// JavaScript
const ERROR_TYPES = {
  NOT_FOUND: "notFound",
  UNAUTHORIZED: "unauthorized",
  FORBIDDEN: "forbidden",
};

function mostrarMensaje(tipoDeError: ENUM_ERRORS) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No tienes premisos para acceder");
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No tienes permisos para acceder");
  }
}

// TypeScript

const enum ENUM_ERRORS {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unauthorized",
  FORBIDDEN = "forbidden",
}

function mostrarMensajeDos(tipoDeError: ENUM_ERRORS) {
  if (tipoDeError === ENUM_ERRORS.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  } else if (tipoDeError === ENUM_ERRORS.UNAUTHORIZED) {
    console.log("No tienes premisos para acceder");
  } else if (tipoDeError === ENUM_ERRORS.FORBIDDEN) {
    console.log("No tienes permisos para acceder");
  }
}

// Aserciones de Tipos

// Cuidado con las aserciones porque estamos forzando el tipo
const canvas = document.getElementById("span");

// Como sabe TypeScript que realmente estas recuperando un elemento <canvas />

// En este caso al filtrar los resultados posibles lo que interpreta TypeScript es por inferencia el único tipo posible
if (canvas != null && canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
}

// typeof => para tipos
// string, number, boolean,...
// instanceof => para instancias

// fetching de datos en TypeScript
const API_URL = "https://api.github.com/search/repositories?q=javascript";

const response = await fetch(API_URL);

if (!response.ok) {
  throw new Error("Request failed");
}

type APIResponse = {
  items: object[];
};

// Cuidado por qué estamos forzando el tipo y esto puede generar errores en tiempo de ejecución.
const data = (await response.json()) as GitHubAPIResponse;

const repositories = data.items.map((repo) => {
  return { name: repo.name, id: repo.id, url: repo.html_url };
});

// Interface
interface Hero {
  id: string;
  name: string;
  age: number;
  saludar: () => void;
}

const hero: Hero = {
  id: "1",
  name: "Spiderman",
  age: 30,
  saludar: () => console.log("Hello World"),
};

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  amount: number;
}

interface CarritoDeCompras {
  totalPrice: number;
  productos: Zapatilla[];
}

interface CarritoOperations {
  add: (product: Producto) => void;
  remove: (product: Producto) => void;
  clear: (product: Producto) => void;
}

interface Zapatilla extends Producto {
  size: number;
}

const carrito: CarritoDeCompras = {
  totalPrice: 100,
  productos: [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      amount: 1,
      size: 9,
    },
  ],
};

// Interface vs types
// Se recomienda el uso de tipos por preferencia.

// Marrowning

function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === "string") {
    // Infiere que el único tipo en esta parte es un string
    return objeto.length;
  }

  return objeto.toString().length;
}

mostrarLongitud("1");

/* interface Mario {
  company: "Nintendo";
  name: string;
  saltar: () => void;
}

interface Sonic {
  company: "Sega";
  name: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

function jugar(personaje: Personaje) {
  if (personaje.company === "Nintendo") {
    // Infiere que el único tipo posible es Mario
    console.log(personaje.saltar()); 
  } else if (personaje.company === "Sega") {
    // Infiere que el único tipo posible es Sonic
    console.log(personaje.correr());
  }
} */

interface Mario {
  name: string;
  saltar: () => void;
}

interface Sonic {
  name: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

// Type Guard
// Comprueba si personaje es Sonic y esta función determina si el personaje es Sonic
function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

function jugar(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    console.log(personaje.correr());
  } else {
    console.log(personaje.saltar());
  }
}

// Never

function fn(x: string | number) {
  if (typeof x === "string") {
    x.toUpperCase();
    // do something
  } else if (typeof x === "number") {
    x.toFixed(2);
    // do something
  } else {
    // never
  }
}

// Clases
import { type AvengerInterface } from "./types.d";

class Avenger implements AvengerInterface {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;

  constructor(
    name: string,
    powerScore: number,
    wonBattles: number,
    age: number
  ) {
    this.name = name;
    this.powerScore = powerScore;
    this.wonBattles = wonBattles;
    this.age = age;
  }

  get fullName() {
    return `${this.name}, de poder ${this.powerScore}`;
  }

  set power(newPower: number) {
    if (newPower <= 100) {
      this.powerScore = newPower;
    } else {
      throw new Error("Power score cannot be more than 100");
    }
  }
}

const spiderman = new Avenger("Spidey", 80, 0, 30);

// spiderman.name = "Hulk";
