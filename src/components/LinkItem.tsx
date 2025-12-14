import type { Link } from "../types/Link";
interface LinkItemProps {
  link: Link;
}

export function LinkItem({link }: LinkItemProps) {
  return (
    <li style={{ background: "#f4f4f4", margin: "10px 0", padding: "15px", borderRadius: "8px" }}>
      <p style={{ margin: "0 0 5px 0", color: "#666", fontSize: "0.9rem" }}>
        Destino: {link.urlOriginal}
      </p>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a 
          href={`http://localhost:3000/${link.id}`} 
          target="_blank" 
          style={{ color: "#007acc", fontWeight: "bold", textDecoration: "none" }}
        >
          http://localhost:3000/{link.id}
        </a>
        
        <span style={{ background: "#e0e0e0", padding: "2px 8px", borderRadius: "12px", fontSize: "0.8rem" }}>
          🖱️ {link.cliques} cliques
        </span>
      </div>
    </li>
  )
}


