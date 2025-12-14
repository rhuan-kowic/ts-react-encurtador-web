import { useEffect, useState } from "react"
import { api } from "./services/api"
import type { Link } from "./types/Link"
import { LinkItem } from "./components/LinkItem"
import { LinkForm } from "./components/LinkForm" 

function App() {
  const [links, setLinks] = useState<Link[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    carregarLinks();
  }, [])

  const carregarLinks = async () => {
    try {
      const dados = await api.buscarLinks()
      setLinks(dados)
    } catch(err) {
      console.error("Erro ao buscar links", err);
    }
  }

  const handleNovoLink = async (urlOriginal: string) => {
    setLoading(true)
    try {
      const novoLink = await api.encurtarLink(urlOriginal);
      setLinks((listaAtual) => [...listaAtual, novoLink])
    } catch(err) {
      alert("Erro ao encurtar o link!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>✂️ Encurtador de URL</h1>
      
      <LinkForm 
        onEncurtar={handleNovoLink} 
        loading={loading} 
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </ul>
      
      {links.length === 0 && <p style={{ textAlign: "center", color: "#888" }}>Nenhum link criado ainda.</p>}
    </div>
  )
}

export default App