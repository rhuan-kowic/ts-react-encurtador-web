import type { Link } from "../types/Link";

const API_URL = "http://localhost:3000";

export const api = {
  buscarLinks: async (): Promise<Link[]> => {
    const response = await fetch(`${API_URL}/links`);
    const data = await response.json();
    return data;
  },

  encurtarLink: async (urlOriginal: string): Promise<Link> => {
    const response = await fetch(`${API_URL}/encurtar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urlOriginal }),
    });

    if (!response.ok) {
      throw new Error("Erro ao encurtar link.");
    }

    const data = await response.json();
    return data.link;
  },
};
