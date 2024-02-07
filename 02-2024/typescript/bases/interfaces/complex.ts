(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Miguel",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      id: 835,
      zip: "KS2 UDZ",
      city: "Atlanta",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
