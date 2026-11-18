export default function Home() {
 const cards = [ ['WhatsApp','Service setup in Phase 2','Active development'], ['SMS','Coming soon','Planned'], ['Email','Coming soon','Planned'] ];
 return <main style={{maxWidth:950,margin:'70px auto',padding:24}}>
 <h1>Notification Portal</h1><p>Multi-channel Notification Platform — Phase 1 prototype</p>
 <p style={{padding:16,background:'#e1f2e8',borderRadius:12}}>Login and real messaging are not implemented yet.</p>
 <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16,marginTop:32}}>
 {cards.map(([name,desc,status])=><article key={name} style={{background:'white',border:'1px solid #dbe8e0',padding:24,borderRadius:16}}><h2>{name}</h2><p>{desc}</p><small>{status}</small></article>)}
 </section><p style={{marginTop:32}}>API health: <a href="http://localhost:8080/api/auth/health">Auth</a> | <a href="http://localhost:8080/api/whatsapp/health">WhatsApp</a></p>
 </main>;
}
