import React, { useState } from 'react'

interface LinkFormPros{
  onEncurtar: (url: string) => void;
  loading: boolean
}

export function LinkForm({onEncurtar, loading}: LinkFormPros) {
    const [urlInput, setUrlInput] = useState("")
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    if (urlInput) {
      onEncurtar(urlInput); 
      setUrlInput("");      
    }
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "2rem" }}>
      <input
        type="url"
        placeholder="Cole seu link longo aqui..."
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
        required
        style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button 
        type="submit" 
        disabled={loading}
        style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#007acc", color: "white", border: "none", borderRadius: "5px" }}
      >
        {loading ? "Encurtando..." : "Encurtar"}
      </button>
    </form>
  )
}

