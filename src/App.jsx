import { useState } from "react";

const GUIDE_CONTENT = {
  antes: { title:"Antes de Sair", subtitle:"Planejamento", icon:"◈", color:"#f59e0b", sections:[
    {id:"1.1",title:"Avaliação de Risco",content:`Antes de qualquer missão em campo, realizar uma avaliação de risco completa é fundamental.\n\n**Análise do Ambiente:**\n• Pesquise o histórico de segurança da região\n• Identifique áreas de conflito, tensão social ou criminalidade elevada\n• Consulte fontes locais confiáveis e jornalistas da região\n• Verifique alertas de segurança de embaixadas e organismos internacionais\n\n**Avaliação de Ameaças:**\n• Identifique os atores presentes na área\n• Avalie o risco de assalto, sequestro, intimidação ou violência\n• Considere ameaças digitais: vigilância, hackeamento de dispositivos\n• Analise riscos ambientais: clima extremo, acesso médico limitado`},
    {id:"1.2",title:"Plano de Missão",content:`Um plano de missão bem estruturado pode salvar vidas.\n\n**Elementos Essenciais:**\n• Objetivo claro e específico da missão\n• Rota principal e rota alternativa documentadas\n• Pontos de encontro de emergência (mínimo 2)\n• Horários de check-in definidos com contato de segurança\n\n**Registro:**\nDeixe com pessoa de confiança:\n• Destino exato e locais a visitar\n• Meios de transporte utilizados\n• Horário previsto de retorno\n• O que fazer se não receber notícias`},
    {id:"1.3",title:"Equipamentos Essenciais",content:`A preparação correta pode fazer a diferença.\n\n**Kit de Comunicação:**\n• Celular principal + celular backup\n• Power bank com carga completa\n• VPN instalada e configurada\n\n**Kit de Documentação:**\n• Documento de identidade + cópia digital\n• Credencial profissional\n• Seguro de saúde e assistência ao viajante\n\n**Kit de Saúde:**\n• Medicamentos de uso contínuo\n• Kit de primeiros socorros básico`}
  ]},
  campo: { title:"Em Campo", subtitle:"Prevenção Ativa", icon:"◉", color:"#ef4444", sections:[
    {id:"2.1",title:"Comunicação Segura",content:`Como você se comunica pode ser tão importante quanto o que você comunica.\n\n**Princípios:**\n• Assuma que toda comunicação pode ser monitorada\n• Use aplicativos de mensagens criptografadas (Signal)\n• Evite mencionar nomes de fontes por telefone ou texto\n\n**Check-in:**\n• Cumpra rigorosamente os horários estabelecidos\n• Use palavra-código de segurança para indicar que está bem\n• Nunca cancele um check-in sem avisar previamente`},
    {id:"2.2",title:"Vigilância Situacional",content:`A consciência situacional é sua primeira linha de defesa.\n\n**Código Cooper:**\n\n**Branco:** Desatento. NUNCA em campo.\n\n**Amarelo:** Alerta relaxado. Estado padrão em campo.\n\n**Laranja:** Ameaça potencial identificada. Preparando para agir.\n\n**Vermelho:** Ameaça real. Agir imediatamente.\n\n**Sinais de Alerta:**\n• Pessoas seguindo você em múltiplos locais\n• Veículos repetidos na mesma rota\n• Perguntas específicas sobre sua rotina`},
    {id:"2.3",title:"Em Caso de Ameaça",content:`Protocolo Run-Hide-Fight:\n\n**1. FUGA (sempre primeira opção):**\n• Rota segura → fuja imediatamente\n• Deixe seus pertences para trás\n• Ligue para emergências ao estar seguro\n\n**2. ESCONDA-SE:**\n• Paredes sólidas, portas com tranca\n• Silencie o celular completamente\n• Deite-se longe de janelas\n\n**3. ENFRENTE (último recurso):**\n• Apenas se vida em perigo imediato\n• Use o ambiente a seu favor`}
  ]},
  depois: { title:"Após o Campo", subtitle:"Análise e Recuperação", icon:"◇", color:"#10b981", sections:[
    {id:"3.1",title:"Debriefing",content:`O debriefing pós-missão é essencial para melhorar protocolos futuros.\n\n**Primeiras 24h:**\n• Notifique contato de segurança do retorno\n• Faça registro inicial enquanto os detalhes estão frescos\n• Documente qualquer incidente de segurança\n• Identifique se foi seguido ou monitorado\n\n**O Que Registrar:**\n• Toda a rota percorrida\n• Incidentes ou situações de risco\n• Falhas no plano de missão\n• O que funcionou e o que precisa melhorar`},
    {id:"3.2",title:"Documentação de Incidentes",content:`A documentação adequada protege você, suas fontes e colegas.\n\n**O Que Registrar:**\n• Data, hora e localização exata\n• Descrição cronológica do ocorrido\n• Descrição dos envolvidos\n• Evidências coletadas (fotos, gravações)\n• Estado físico e emocional após o evento`},
    {id:"3.3",title:"Apoio Psicológico",content:`O impacto psicológico de situações de risco é real e merece atenção.\n\n**Sinais de Impacto:**\n• Dificuldade para dormir ou pesadelos\n• Irritabilidade ou mudanças de humor\n• Reviver mentalmente o evento (flashbacks)\n• Hipervigilância constante\n\n**Esses são sinais normais — não são fraqueza.**\n\n**Autocuidado:**\n• Permita-se descansar e processar\n• Mantenha rotina básica: sono, alimentação, exercício\n• Pratique técnicas de grounding (respiração, mindfulness)\n\n**Busque ajuda profissional se os sintomas persistirem por mais de 2-4 semanas.**`}
  ]}
};

const DEFAULT_CHECKLIST = [
  { id:"cat-1", label:"Antes de Sair", color:"#f59e0b", icon:"◈", items:[
    {id:"c1-1",text:"Avaliar o nível de risco da região de destino",done:false},
    {id:"c1-2",text:"Registrar plano de missão com pessoa de confiança",done:false},
    {id:"c1-3",text:"Definir horários de check-in e protocolo de ausência",done:false},
    {id:"c1-4",text:"Carregar celular principal e backup completamente",done:false},
    {id:"c1-5",text:"Ativar e testar VPN no dispositivo",done:false},
    {id:"c1-6",text:"Fazer backup de arquivos e dados sensíveis",done:false},
    {id:"c1-7",text:"Confirmar contatos de emergência atualizados no app",done:false},
    {id:"c1-8",text:"Levar documentos de identidade e credencial profissional",done:false},
    {id:"c1-9",text:"Verificar validade do seguro de saúde / viagem",done:false},
    {id:"c1-10",text:"Pesquisar localização de hospitais e delegacias na área",done:false},
  ]},
  { id:"cat-2", label:"Em Campo", color:"#ef4444", icon:"◉", items:[
    {id:"c2-1",text:"Realizar check-in inicial ao chegar ao destino",done:false},
    {id:"c2-2",text:"Identificar saídas de emergência ao entrar em locais",done:false},
    {id:"c2-3",text:"Evitar postar localização em tempo real nas redes sociais",done:false},
    {id:"c2-4",text:"Usar VPN em redes Wi-Fi públicas ou abertas",done:false},
    {id:"c2-5",text:"Manter consciência situacional (Nível Amarelo)",done:false},
    {id:"c2-6",text:"Variar rotas e horários de deslocamento",done:false},
    {id:"c2-7",text:"Cumprir todos os check-ins nos horários definidos",done:false},
    {id:"c2-8",text:"Não compartilhar dados de fontes por canais inseguros",done:false},
  ]},
  { id:"cat-3", label:"Após o Campo", color:"#10b981", icon:"◇", items:[
    {id:"c3-1",text:"Notificar contato de segurança do retorno seguro",done:false},
    {id:"c3-2",text:"Registrar incidentes ocorridos durante a missão",done:false},
    {id:"c3-3",text:"Realizar debriefing com equipe ou editor",done:false},
    {id:"c3-4",text:"Avaliar o plano de missão vs. realidade encontrada",done:false},
    {id:"c3-5",text:"Fazer check emocional — buscar apoio psicológico se necessário",done:false},
    {id:"c3-6",text:"Atualizar contatos de emergência se houver mudanças",done:false},
  ]}
];

const MOCK_USER = { name: "Ana Silva", email: "ana@exemplo.com" };
const RISK_COLORS = { alto:"#ef4444", médio:"#f59e0b", baixo:"#10b981", alto_crítico:"#dc2626" };
const RISK_BG = { alto:"rgba(239,68,68,0.08)", médio:"rgba(245,158,11,0.07)", baixo:"rgba(16,185,129,0.07)", alto_crítico:"rgba(220,38,38,0.12)" };

export default function App() {
  const [screen, setScreen] = useState("login");
  const [user, setUser] = useState(null);
  const [loginData, setLoginData] = useState({ email:"", password:"", name:"" });
  const [isSignup, setIsSignup] = useState(false);
  const [activeGuide, setActiveGuide] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const [contacts, setContacts] = useState([
    { id:"sys-police", type:"Polícia",    name:"Polícia Militar",    phone:"190", email:"", system:true, icon:"🚔" },
    { id:"sys-fire",   type:"Bombeiros",  name:"Corpo de Bombeiros", phone:"193", email:"", system:true, icon:"🚒" },
    { id:"sys-amb",    type:"Ambulância", name:"SAMU",               phone:"192", email:"", system:true, icon:"🚑" },
    { id:1, type:"Advogado", name:"Dr. Marcos Pereira", phone:"(11) 99999-0001", email:"marcos@adv.com", system:false },
  ]);
  const [showAddContact, setShowAddContact] = useState(false);
  const [editContact,    setEditContact]    = useState(null);
  const [newContact,     setNewContact]     = useState({ type:"Advogado", name:"", phone:"", email:"" });

  const [checklist,     setChecklist]     = useState(DEFAULT_CHECKLIST);
  const [showAddItem,   setShowAddItem]   = useState(false);
  const [newItemText,   setNewItemText]   = useState("");
  const [newItemCat,    setNewItemCat]    = useState("cat-1");
  const [expandedCats,  setExpandedCats]  = useState({"cat-1":true,"cat-2":false,"cat-3":false});

  const [locationData,   setLocationData]   = useState(null);
  const [locationStatus, setLocationStatus] = useState("idle");
  const [locationError,  setLocationError]  = useState("");
  const [riskData,       setRiskData]       = useState(null);
  const [riskStatus,     setRiskStatus]     = useState("idle");
  const [activeRisk,     setActiveRisk]     = useState(null);

  const toggleItem = (cid,iid) => setChecklist(cl=>cl.map(c=>c.id!==cid?c:{...c,items:c.items.map(it=>it.id!==iid?it:{...it,done:!it.done})}));
  const removeItem = (cid,iid) => setChecklist(cl=>cl.map(c=>c.id!==cid?c:{...c,items:c.items.filter(it=>it.id!==iid)}));
  const addChecklistItem = () => {
    if (!newItemText.trim()) return;
    setChecklist(cl=>cl.map(c=>c.id!==newItemCat?c:{...c,items:[...c.items,{id:`cu-${Date.now()}`,text:newItemText.trim(),done:false,custom:true}]}));
    setNewItemText(""); setShowAddItem(false);
  };
  const resetChecklist = () => setChecklist(cl=>cl.map(c=>({...c,items:c.items.map(it=>({...it,done:false}))})));
  const totalItems = checklist.reduce((s,c)=>s+c.items.length,0);
  const doneItems  = checklist.reduce((s,c)=>s+c.items.filter(it=>it.done).length,0);
  const progress   = totalItems===0?0:Math.round((doneItems/totalItems)*100);

  const handleLogin  = () => { setUser({name:loginData.name||MOCK_USER.name,email:loginData.email||MOCK_USER.email}); setScreen("home"); };
  const handleLogout = () => { setUser(null); setScreen("login"); setLocationData(null); setRiskData(null); setLocationStatus("idle"); };

  const saveContact = () => {
    if (editContact) setContacts(contacts.map(c=>c.id===editContact.id?{...newContact,id:editContact.id,system:false}:c));
    else setContacts([...contacts,{...newContact,id:Date.now(),system:false}]);
    setShowAddContact(false); setEditContact(null); setNewContact({type:"Advogado",name:"",phone:"",email:""});
  };
  const deleteContact   = id => setContacts(contacts.filter(c=>c.id!==id));
  const openEditContact = c  => { setEditContact(c); setNewContact({...c}); setShowAddContact(true); };

  const detectLocation = () => {
    if (!navigator.geolocation) { setLocationError("Geolocalização não suportada neste dispositivo."); setLocationStatus("error"); return; }
    setLocationStatus("detecting"); setLocationError("");
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const { latitude:lat, longitude:lng } = pos.coords;
        try {
          const r   = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=pt`);
          const geo = await r.json();
          const a   = geo.address||{};
          const detected = {
            lat, lng,
            country:     a.country||"Desconhecido",
            countryCode: (a.country_code||"??").toUpperCase(),
            state:       a.state||a.region||"",
            city:        a.city||a.town||a.village||a.municipality||"",
          };
          setLocationData(detected); setLocationStatus("done");
          fetchLocationIntel(detected);
        } catch {
          setLocationStatus("error");
          setLocationError("Não foi possível identificar a localização. Verifique sua conexão.");
        }
      },
      err => {
        setLocationStatus("error");
        const m={1:"Permissão negada. Habilite nas configurações do navegador.",2:"Posição indisponível.",3:"Tempo de resposta esgotado."};
        setLocationError(m[err.code]||"Erro ao acessar o GPS.");
      },
      {timeout:15000,maximumAge:300000}
    );
  };

  const fetchLocationIntel = async loc => {
    setRiskStatus("loading");
    const prompt = `Você é especialista em segurança pessoal. Usuário em: País: ${loc.country} (${loc.countryCode}), Estado: ${loc.state||"n/a"}, Cidade: ${loc.city||"n/a"}.

Retorne SOMENTE JSON válido (sem markdown, sem texto extra):
{
  "emergency_numbers": {
    "police":    {"number":"190","name":"Polícia Militar"},
    "fire":      {"number":"193","name":"Corpo de Bombeiros"},
    "ambulance": {"number":"192","name":"SAMU"}
  },
  "location_summary": "2 frases sobre contexto de segurança desta localidade",
  "overall_risk": "baixo|médio|alto|alto_crítico",
  "risks": [
    {
      "id":"r1",
      "title":"Nome do crime/situação",
      "level":"baixo|médio|alto|alto_crítico",
      "prevalence":"Ex: Muito comum em centros urbanos",
      "description":"2-3 frases contextualizadas para esta localidade",
      "tips":["Dica prática 1","Dica prática 2","Dica prática 3","Dica prática 4"]
    }
  ]
}
Inclua 4 a 7 riscos do mais grave ao menos grave, específicos para ${loc.city||loc.state||loc.country}. Números de emergência devem ser os oficiais deste país/estado.`;
    try {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY || "";
      const res  = await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1500,messages:[{role:"user",content:prompt}]})});
      const data = await res.json();
      const text = data.content?.map(b=>b.text||"").join("")||"";
      const parsed = JSON.parse(text.replace(/```json|```/g,"").trim());
      setContacts(prev=>prev.map(c=>{
        if(!c.system) return c;
        if(c.id==="sys-police") return {...c,phone:parsed.emergency_numbers.police.number,   name:parsed.emergency_numbers.police.name};
        if(c.id==="sys-fire")   return {...c,phone:parsed.emergency_numbers.fire.number,     name:parsed.emergency_numbers.fire.name};
        if(c.id==="sys-amb")    return {...c,phone:parsed.emergency_numbers.ambulance.number, name:parsed.emergency_numbers.ambulance.name};
        return c;
      }));
      setRiskData(parsed); setRiskStatus("done");
    } catch { setRiskStatus("error"); }
  };

  const oColor = riskData?(RISK_COLORS[riskData.overall_risk]||"#f59e0b"):"#475569";
  const oBg    = riskData?(RISK_BG[riskData.overall_risk]||"rgba(245,158,11,0.07)"):"rgba(255,255,255,0.03)";
  const rLabel = {baixo:"BAIXO",médio:"MÉDIO",alto:"ALTO",alto_crítico:"CRÍTICO"};

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#040609}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#0d1117}::-webkit-scrollbar-thumb{background:#f59e0b44;border-radius:2px}
        .screen{min-height:100vh;display:flex;flex-direction:column;animation:fadeIn .25s ease}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse-ring{0%{transform:scale(.95);box-shadow:0 0 0 0 rgba(220,38,38,.5)}70%{transform:scale(1);box-shadow:0 0 0 14px rgba(220,38,38,0)}100%{transform:scale(.95);box-shadow:0 0 0 0 rgba(220,38,38,0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes checkPop{0%{transform:scale(.7)}60%{transform:scale(1.2)}100%{transform:scale(1)}}
        @keyframes ripple{0%{transform:scale(.8);opacity:1}100%{transform:scale(2.6);opacity:0}}
        .sos-btn{animation:pulse-ring 2.5s ease-in-out infinite}
        .grid-bg{background-image:linear-gradient(rgba(245,158,11,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,.04) 1px,transparent 1px);background-size:32px 32px}
        .input-field{width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:14px 16px;color:#e2e8f0;font-family:'IBM Plex Sans',sans-serif;font-size:15px;outline:none;transition:border-color .2s}
        .input-field:focus{border-color:#f59e0b}.input-field::placeholder{color:#64748b}
        select.input-field option{background:#1a2035;color:#e2e8f0}
        .btn-primary{width:100%;background:#f59e0b;color:#080c14;border:none;border-radius:8px;padding:15px;font-family:'IBM Plex Sans',sans-serif;font-size:15px;font-weight:700;letter-spacing:.5px;cursor:pointer;transition:all .2s}
        .btn-primary:hover{background:#fbbf24;transform:translateY(-1px)}
        .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,.15);color:#94a3b8;border-radius:8px;padding:12px 20px;font-family:'IBM Plex Sans',sans-serif;font-size:14px;cursor:pointer;transition:all .2s}
        .btn-ghost:hover{border-color:#f59e0b;color:#f59e0b}
        .card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;transition:all .2s}
        .card-btn{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;transition:all .2s;cursor:pointer;width:100%;text-align:left}
        .card-btn:hover{border-color:rgba(245,158,11,.3);background:rgba(245,158,11,.04)}
        .nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:8px 2px;background:none;border:none;cursor:pointer;color:#475569;font-family:'IBM Plex Sans',sans-serif;font-size:8.5px;font-weight:500;transition:color .2s;letter-spacing:.2px}
        .nav-item.active{color:#f59e0b}
        .tag{font-family:'IBM Plex Mono',monospace;font-size:10px;padding:3px 8px;border-radius:4px;font-weight:500;letter-spacing:.5px}
        .fab{position:fixed;bottom:86px;right:calc(50% - 215px + 20px);width:52px;height:52px;border:none;border-radius:50%;color:#080c14;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;z-index:100}
        .fab:hover{transform:scale(1.1)}
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.85);display:flex;align-items:flex-end;justify-content:center;z-index:200;animation:fadeIn .2s ease}
        .modal{background:#0f1623;border:1px solid rgba(255,255,255,.1);border-radius:20px 20px 0 0;padding:24px;width:100%;max-width:430px;max-height:90vh;overflow-y:auto;animation:slideUp .3s ease}
        @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        .section-divider{height:1px;background:linear-gradient(90deg,transparent,rgba(245,158,11,.2),transparent);margin:8px 0}
        .check-row{display:flex;align-items:center;gap:12px;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer;transition:background .15s;user-select:none}
        .check-row:last-child{border-bottom:none}.check-row:hover{background:rgba(255,255,255,.025)}
        .check-row.done-row .item-text{text-decoration:line-through;color:#374151 !important}
        .checkbox{width:20px;height:20px;border-radius:6px;border:1.5px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .18s;font-size:11px}
        .checkbox.checked{border-color:transparent;animation:checkPop .22s ease}
        .progress-bar-track{height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden}
        .progress-bar-fill{height:100%;border-radius:3px;transition:width .4s ease}
        .cat-header{display:flex;align-items:center;gap:10px;padding:14px 16px;cursor:pointer;user-select:none;transition:background .15s}
        .cat-header:hover{background:rgba(255,255,255,.02)}
        .del-btn{background:none;border:none;color:transparent;cursor:pointer;font-size:13px;padding:3px 6px;border-radius:4px;transition:all .15s;flex-shrink:0;line-height:1}
        .check-row:hover .del-btn{color:#374151}.del-btn:hover{color:#ef4444 !important;background:rgba(239,68,68,.12)}
        .spinner{width:20px;height:20px;border:2px solid rgba(255,255,255,.1);border-top-color:#818cf8;border-radius:50%;animation:spin .7s linear infinite;display:inline-block}
        .risk-card{border-radius:12px;overflow:hidden;transition:all .2s;cursor:pointer}
        .risk-card:hover{transform:translateY(-1px)}
        .gps-ripple{position:relative;width:72px;height:72px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .gps-ripple::before,.gps-ripple::after{content:'';position:absolute;border:1.5px solid rgba(99,102,241,.3);border-radius:50%;width:72px;height:72px;animation:ripple 2s ease-out infinite}
        .gps-ripple::after{animation-delay:.7s;border-color:rgba(99,102,241,.15)}
      `}</style>

      <div style={{fontFamily:"'IBM Plex Sans',sans-serif",background:"#080c14",minHeight:"100vh",maxWidth:430,margin:"0 auto",color:"#e2e8f0"}}>

        {/* LOGIN */}
        {screen==="login" && (
          <div className="screen grid-bg" style={{justifyContent:"center",padding:"40px 24px 32px"}}>
            <div style={{textAlign:"center",marginBottom:40}}>
              <div style={{width:72,height:72,background:"linear-gradient(135deg,#f59e0b22,#f59e0b44)",border:"1px solid #f59e0b66",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",fontSize:32}}>🛡️</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:3,color:"#f59e0b"}}>GUIA DE BOLSO</div>
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:11,color:"#475569",letterSpacing:2,marginTop:4}}>SEGURANÇA & PROTEÇÃO PESSOAL</div>
            </div>
            <div style={{display:"flex",background:"rgba(255,255,255,.04)",borderRadius:10,padding:4,marginBottom:28}}>
              {["Entrar","Criar Conta"].map((label,i)=>(
                <button key={i} onClick={()=>setIsSignup(i===1)} style={{flex:1,padding:"10px",border:"none",borderRadius:8,cursor:"pointer",fontFamily:"'IBM Plex Sans',sans-serif",fontWeight:600,fontSize:14,background:isSignup===(i===1)?"#f59e0b":"transparent",color:isSignup===(i===1)?"#080c14":"#64748b",transition:"all .2s"}}>{label}</button>
              ))}
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {isSignup&&<input className="input-field" placeholder="Seu nome completo" value={loginData.name} onChange={e=>setLoginData({...loginData,name:e.target.value})}/>}
              <input className="input-field" type="email" placeholder="E-mail" value={loginData.email} onChange={e=>setLoginData({...loginData,email:e.target.value})}/>
              <input className="input-field" type="password" placeholder="Senha" value={loginData.password} onChange={e=>setLoginData({...loginData,password:e.target.value})}/>
              {!isSignup&&<button style={{background:"none",border:"none",color:"#f59e0b",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:13,cursor:"pointer",textAlign:"right"}}>Esqueci minha senha →</button>}
              <button className="btn-primary" style={{marginTop:8}} onClick={handleLogin}>{isSignup?"CRIAR CONTA":"ENTRAR"}</button>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:12,margin:"24px 0"}}>
              <div style={{flex:1,height:1,background:"rgba(255,255,255,.07)"}}/>
              <span style={{color:"#475569",fontSize:12,fontFamily:"'IBM Plex Mono',monospace"}}>OU</span>
              <div style={{flex:1,height:1,background:"rgba(255,255,255,.07)"}}/>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {[{icon:"G",label:"Continuar com Google",color:"#4285f4"},{icon:"⌘",label:"Continuar com Apple",color:"#e2e8f0"}].map((s,i)=>(
                <button key={i} onClick={handleLogin} style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.1)",borderRadius:8,padding:13,cursor:"pointer",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:14,color:"#e2e8f0",fontWeight:500}}>
                  <span style={{color:s.color,fontWeight:700}}>{s.icon}</span>{s.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* HOME */}
        {screen==="home" && (
          <div className="screen" style={{paddingBottom:80}}>
            <div className="grid-bg" style={{padding:"52px 20px 24px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#475569",letterSpacing:2,marginBottom:6}}>● SISTEMA ATIVO</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:26,letterSpacing:2,color:"#e2e8f0"}}>Olá, {user?.name?.split(" ")[0]}</div>
                  <div style={{fontSize:13,color:"#475569",marginTop:2}}>Mantenha-se seguro em campo</div>
                </div>
                <button onClick={()=>setScreen("settings")} style={{background:"rgba(255,255,255,.04)",border:"1px solid rgba(255,255,255,.08)",borderRadius:10,padding:"10px 12px",cursor:"pointer",color:"#64748b",fontSize:18}}>⚙</button>
              </div>
            </div>
            <div style={{padding:"0 20px",display:"flex",flexDirection:"column",gap:14}}>
              <button className="sos-btn" onClick={()=>setScreen("contacts")} style={{background:"linear-gradient(135deg,#dc2626,#b91c1c)",border:"none",borderRadius:14,padding:"20px 24px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                <div style={{textAlign:"left"}}>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"rgba(255,255,255,.6)",letterSpacing:2}}>ACESSO RÁPIDO</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:"#fff",letterSpacing:2,marginTop:2}}>CONTATOS DE EMERGÊNCIA</div>
                  <div style={{fontSize:12,color:"rgba(255,255,255,.6)",marginTop:2}}>{contacts.length} contatos · {locationStatus==="done"?`📍 ${locationData?.city||locationData?.country}`:"localização não detectada"}</div>
                </div>
                <div style={{fontSize:36}}>🆘</div>
              </button>

              <button onClick={()=>setScreen("risks")} style={{background:locationStatus==="done"?oBg:"rgba(99,102,241,.05)",border:`1px solid ${locationStatus==="done"?oColor+"40":"rgba(99,102,241,.2)"}`,borderRadius:14,padding:"16px 20px",cursor:"pointer",width:"100%",textAlign:"left",transition:"all .2s"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:locationStatus==="done"?oColor:"#818cf8",letterSpacing:2}}>RISCOS LOCAIS</div>
                    <div style={{fontWeight:600,fontSize:15,color:"#e2e8f0",marginTop:3}}>
                      {locationStatus==="idle"&&"Ativar detecção de localização"}
                      {locationStatus==="detecting"&&"Detectando localização..."}
                      {locationStatus==="done"&&(locationData?.city||locationData?.state||locationData?.country||"Local detectado")}
                      {locationStatus==="error"&&"Erro na detecção"}
                    </div>
                    {locationStatus==="done"&&riskStatus==="done"&&<div style={{fontSize:12,color:"#475569",marginTop:2}}>{riskData?.risks?.length} riscos identificados · Toque para ver</div>}
                    {locationStatus==="done"&&riskStatus==="loading"&&<div style={{fontSize:12,color:"#818cf8",marginTop:2}}>Analisando riscos da região...</div>}
                  </div>
                  <div style={{minWidth:52,display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                    {locationStatus==="done"&&riskStatus==="done"&&riskData&&<div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,color:oColor}}>{rLabel[riskData.overall_risk]||"—"}</div>}
                    {(locationStatus==="detecting"||riskStatus==="loading")&&<div className="spinner"/>}
                    {locationStatus==="idle"&&<span style={{fontSize:28}}>📍</span>}
                    {locationStatus==="error"&&<span style={{fontSize:24}}>⚠️</span>}
                  </div>
                </div>
              </button>

              <button onClick={()=>setScreen("checklist")} style={{background:"rgba(99,102,241,.05)",border:"1px solid rgba(99,102,241,.2)",borderRadius:14,padding:"16px 20px",cursor:"pointer",width:"100%",textAlign:"left"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                  <div>
                    <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#818cf8",letterSpacing:2}}>CHECK-LIST DE MISSÃO</div>
                    <div style={{fontWeight:600,fontSize:15,color:"#e2e8f0",marginTop:3}}>Preparação para Campo</div>
                  </div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:progress===100?"#10b981":"#818cf8"}}>{progress}%</div>
                </div>
                <div className="progress-bar-track"><div className="progress-bar-fill" style={{width:`${progress}%`,background:progress===100?"linear-gradient(90deg,#10b981,#34d399)":"linear-gradient(90deg,#6366f1,#818cf8)"}}/></div>
                <div style={{fontSize:12,color:"#475569",marginTop:8}}>{doneItems} de {totalItems} itens verificados</div>
              </button>

              <div>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:16,letterSpacing:2,color:"#94a3b8"}}>GUIA DE SEGURANÇA</div>
                  <div style={{flex:1,height:1,background:"rgba(255,255,255,.06)"}}/>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  {[{key:"antes",num:"01",label:"Antes de Sair",sub:"Planejamento & Avaliação",icon:"◈",color:"#f59e0b"},{key:"campo",num:"02",label:"Em Campo",sub:"Prevenção & Vigilância",icon:"◉",color:"#ef4444"},{key:"depois",num:"03",label:"Após o Campo",sub:"Análise & Recuperação",icon:"◇",color:"#10b981"}].map(item=>(
                    <button key={item.key} className="card-btn" onClick={()=>{setActiveGuide(item.key);setActiveSection(null);setScreen("guide");}} style={{padding:"16px 18px",display:"flex",alignItems:"center",gap:16}}>
                      <div style={{width:44,height:44,borderRadius:10,background:`${item.color}18`,border:`1px solid ${item.color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:item.color,flexShrink:0}}>{item.icon}</div>
                      <div style={{flex:1}}>
                        <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:item.color,letterSpacing:1}}>SEÇÃO {item.num}</div>
                        <div style={{fontWeight:600,fontSize:15,color:"#e2e8f0",marginTop:2}}>{item.label}</div>
                        <div style={{fontSize:12,color:"#475569",marginTop:1}}>{item.sub}</div>
                      </div>
                      <div style={{color:"#374151",fontSize:18}}>›</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <BottomNav screen={screen} setScreen={setScreen}/>
          </div>
        )}

        {/* RISKS */}
        {screen==="risks" && (
          <div className="screen" style={{paddingBottom:80}}>
            <div className="grid-bg" style={{padding:"52px 20px 20px"}}>
              <button onClick={()=>setScreen("home")} style={{background:"none",border:"none",color:"#f59e0b",fontSize:13,cursor:"pointer",marginBottom:12,fontFamily:"'IBM Plex Sans',sans-serif"}}>← Voltar</button>
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#818cf8",letterSpacing:2}}>ANÁLISE DE RISCO</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:2,color:"#e2e8f0",marginTop:4}}>RISCOS LOCAIS</div>
            </div>
            <div style={{padding:"16px 20px 40px",display:"flex",flexDirection:"column",gap:14}}>
              {locationStatus==="idle" && (
                <div style={{background:"rgba(99,102,241,.07)",border:"1px solid rgba(99,102,241,.2)",borderRadius:16,padding:28,textAlign:"center"}}>
                  <div style={{fontSize:48,marginBottom:16}}>📍</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,letterSpacing:2,color:"#e2e8f0",marginBottom:8}}>DETECTAR LOCALIZAÇÃO</div>
                  <div style={{fontSize:13,color:"#64748b",lineHeight:1.6,marginBottom:20}}>O app acessará o GPS para identificar os números de emergência corretos e os principais riscos da sua região atual.</div>
                  <button onClick={detectLocation} style={{background:"#6366f1",color:"#fff",border:"none",borderRadius:10,padding:"14px 28px",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:14,fontWeight:700,cursor:"pointer",letterSpacing:.5}}>ATIVAR GPS</button>
                </div>
              )}
              {locationStatus==="detecting" && (
                <div style={{background:"rgba(99,102,241,.07)",border:"1px solid rgba(99,102,241,.2)",borderRadius:16,padding:36,textAlign:"center"}}>
                  <div style={{display:"flex",justifyContent:"center",marginBottom:20}}>
                    <div className="gps-ripple">
                      <div style={{width:36,height:36,background:"rgba(99,102,241,.25)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,position:"relative",zIndex:1}}>📍</div>
                    </div>
                  </div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:12,color:"#818cf8",letterSpacing:1}}>ADQUIRINDO SINAL GPS...</div>
                  <div style={{fontSize:12,color:"#475569",marginTop:8}}>Aguardando permissão e posição</div>
                </div>
              )}
              {locationStatus==="error" && (
                <div style={{background:"rgba(239,68,68,.07)",border:"1px solid rgba(239,68,68,.2)",borderRadius:14,padding:20}}>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:11,color:"#ef4444",letterSpacing:1,marginBottom:8}}>⚠ ERRO NA DETECÇÃO</div>
                  <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.6,marginBottom:14}}>{locationError}</div>
                  <button onClick={detectLocation} style={{background:"rgba(239,68,68,.15)",border:"1px solid rgba(239,68,68,.3)",borderRadius:8,padding:"10px 16px",color:"#ef4444",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:13,fontWeight:600,cursor:"pointer"}}>Tentar Novamente</button>
                </div>
              )}
              {locationStatus==="done" && locationData && (
                <>
                  <div style={{background:oBg,border:`1px solid ${oColor}40`,borderRadius:14,padding:"16px 18px"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                      <div>
                        <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#818cf8",letterSpacing:1,marginBottom:6}}>📍 LOCALIZAÇÃO DETECTADA</div>
                        {locationData.city&&<div style={{fontWeight:700,fontSize:17,color:"#e2e8f0"}}>{locationData.city}</div>}
                        {locationData.state&&<div style={{fontSize:13,color:"#94a3b8",marginTop:2}}>{locationData.state}</div>}
                        <div style={{fontSize:13,color:"#64748b",marginTop:1}}>{locationData.country}</div>
                      </div>
                      <div style={{textAlign:"right"}}>
                        {riskStatus==="done"&&riskData&&(
                          <><div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:"#475569",letterSpacing:1}}>RISCO GERAL</div>
                          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:26,color:oColor,marginTop:2}}>{rLabel[riskData.overall_risk]||"—"}</div></>
                        )}
                        {riskStatus==="loading"&&<div className="spinner" style={{margin:"4px 0 0 auto"}}/>}
                      </div>
                    </div>
                    {riskStatus==="done"&&riskData?.location_summary&&(
                      <div style={{marginTop:12,paddingTop:12,borderTop:"1px solid rgba(255,255,255,.06)",fontSize:12,color:"#64748b",lineHeight:1.6}}>{riskData.location_summary}</div>
                    )}
                    <button onClick={detectLocation} style={{marginTop:10,background:"none",border:"none",color:"#374151",fontFamily:"'IBM Plex Mono',monospace",fontSize:10,cursor:"pointer",letterSpacing:.5}}>↺ Atualizar localização</button>
                  </div>

                  {riskStatus==="loading" && (
                    <div style={{padding:"28px 0",textAlign:"center"}}>
                      <div className="spinner" style={{width:28,height:28,borderWidth:3,margin:"0 auto 14px"}}/>
                      <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:11,color:"#818cf8",letterSpacing:1}}>ANALISANDO RISCOS LOCAIS</div>
                      <div style={{fontSize:12,color:"#475569",marginTop:6}}>Consultando dados para {locationData.city||locationData.country}</div>
                    </div>
                  )}

                  {riskStatus==="done" && riskData?.risks && (
                    <div style={{display:"flex",flexDirection:"column",gap:10}}>
                      <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#475569",letterSpacing:1.5}}>{riskData.risks.length} RISCOS IDENTIFICADOS — TOQUE PARA EXPANDIR</div>
                      {riskData.risks.map(risk=>{
                        const rc=RISK_COLORS[risk.level]||"#f59e0b";
                        const rb=RISK_BG[risk.level]||"rgba(255,255,255,.03)";
                        const open=activeRisk?.id===risk.id;
                        return (
                          <div key={risk.id} className="risk-card" onClick={()=>setActiveRisk(open?null:risk)} style={{background:rb,border:`1px solid ${rc}30`}}>
                            <div style={{padding:"14px 16px",display:"flex",alignItems:"center",gap:12}}>
                              <div style={{width:8,height:8,borderRadius:"50%",background:rc,flexShrink:0,boxShadow:`0 0 8px ${rc}`}}/>
                              <div style={{flex:1}}>
                                <div style={{fontWeight:600,fontSize:14,color:"#e2e8f0"}}>{risk.title}</div>
                                <div style={{fontSize:11,color:"#64748b",marginTop:2,fontFamily:"'IBM Plex Mono',monospace"}}>{risk.prevalence}</div>
                              </div>
                              <div style={{display:"flex",alignItems:"center",gap:8}}>
                                <span className="tag" style={{background:`${rc}18`,color:rc,border:`1px solid ${rc}30`,fontSize:9}}>{(risk.level||"").toUpperCase().replace("_"," ")}</span>
                                <span style={{color:"#374151",fontSize:13,transition:"transform .2s",transform:open?"rotate(90deg)":"none"}}>›</span>
                              </div>
                            </div>
                            {open && (
                              <div style={{padding:"0 16px 16px",borderTop:"1px solid rgba(255,255,255,.05)"}}>
                                <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.7,marginBottom:14,paddingTop:12}}>{risk.description}</div>
                                <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:rc,letterSpacing:1,marginBottom:10}}>COMO SE PROTEGER</div>
                                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                                  {risk.tips?.map((tip,i)=>(
                                    <div key={i} style={{display:"flex",gap:10,alignItems:"flex-start"}}>
                                      <div style={{width:20,height:20,borderRadius:5,background:`${rc}15`,border:`1px solid ${rc}30`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:rc}}>{i+1}</div>
                                      <div style={{fontSize:13,color:"#cbd5e1",lineHeight:1.5}}>{tip}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {riskStatus==="error" && (
                    <div style={{background:"rgba(239,68,68,.07)",border:"1px solid rgba(239,68,68,.2)",borderRadius:12,padding:16,textAlign:"center"}}>
                      <div style={{fontSize:13,color:"#94a3b8"}}>Não foi possível analisar os riscos.</div>
                      <button onClick={()=>fetchLocationIntel(locationData)} style={{marginTop:10,background:"none",border:"1px solid rgba(239,68,68,.3)",borderRadius:7,padding:"8px 16px",color:"#ef4444",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:12,cursor:"pointer"}}>Tentar Novamente</button>
                    </div>
                  )}
                </>
              )}
            </div>
            <BottomNav screen={screen} setScreen={setScreen}/>
          </div>
        )}

        {/* GUIDE */}
        {screen==="guide" && activeGuide && (
          <div className="screen" style={{paddingBottom:80}}>
            {!activeSection ? (
              <>
                <div className="grid-bg" style={{padding:"52px 20px 24px"}}>
                  <button onClick={()=>setScreen("home")} style={{background:"none",border:"none",color:"#f59e0b",fontSize:13,cursor:"pointer",marginBottom:12,fontFamily:"'IBM Plex Sans',sans-serif"}}>← Voltar</button>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#475569",letterSpacing:2}}>GUIA DE SEGURANÇA</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:2,color:GUIDE_CONTENT[activeGuide].color,marginTop:6}}>{GUIDE_CONTENT[activeGuide].title}</div>
                  <div style={{fontSize:13,color:"#475569",marginTop:4}}>{GUIDE_CONTENT[activeGuide].subtitle}</div>
                </div>
                <div style={{padding:"20px",display:"flex",flexDirection:"column",gap:10}}>
                  {GUIDE_CONTENT[activeGuide].sections.map((sec,i)=>(
                    <button key={i} className="card-btn" onClick={()=>setActiveSection(sec)} style={{padding:"18px",display:"flex",alignItems:"center",gap:14}}>
                      <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:13,fontWeight:500,color:GUIDE_CONTENT[activeGuide].color,minWidth:32}}>{sec.id}</div>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:600,fontSize:15,color:"#e2e8f0"}}>{sec.title}</div>
                        <div style={{fontSize:12,color:"#475569",marginTop:3}}>{sec.content.substring(0,60).trim()}...</div>
                      </div>
                      <div style={{color:"#374151",fontSize:18}}>›</div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="grid-bg" style={{padding:"52px 20px 20px"}}>
                  <button onClick={()=>setActiveSection(null)} style={{background:"none",border:"none",color:"#f59e0b",fontSize:13,cursor:"pointer",marginBottom:12,fontFamily:"'IBM Plex Sans',sans-serif"}}>← {GUIDE_CONTENT[activeGuide].title}</button>
                  <span className="tag" style={{background:`${GUIDE_CONTENT[activeGuide].color}18`,color:GUIDE_CONTENT[activeGuide].color,border:`1px solid ${GUIDE_CONTENT[activeGuide].color}44`}}>{activeSection.id}</span>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:24,letterSpacing:1.5,color:"#e2e8f0",marginTop:8}}>{activeSection.title}</div>
                </div>
                <div style={{padding:"20px 20px 40px"}}>
                  {activeSection.content.split('\n\n').map((para,i)=>(
                    <div key={i} style={{marginBottom:16}}>
                      {para.split('\n').map((line,j)=>{
                        if(line.startsWith('**')&&line.endsWith('**')) return <div key={j} style={{fontWeight:700,fontSize:14,color:"#e2e8f0",marginBottom:6,marginTop:j===0?0:4}}>{line.replace(/\*\*/g,'')}</div>;
                        if(line.startsWith('•')) return <div key={j} style={{fontSize:14,color:"#94a3b8",lineHeight:1.7,display:"flex",gap:8}}><span style={{color:"#f59e0b",flexShrink:0}}>•</span><span>{line.slice(1).trim()}</span></div>;
                        if(line.match(/^\d+\./)){const[num,...rest]=line.split('.');return <div key={j} style={{fontSize:14,color:"#94a3b8",lineHeight:1.7,display:"flex",gap:8}}><span style={{color:GUIDE_CONTENT[activeGuide].color,flexShrink:0,fontFamily:"'IBM Plex Mono',monospace",fontSize:12,paddingTop:2}}>{num}.</span><span>{rest.join('.').trim()}</span></div>;}
                        if(!line.trim()) return null;
                        return <div key={j} style={{fontSize:14,color:"#94a3b8",lineHeight:1.75}}>{line}</div>;
                      })}
                    </div>
                  ))}
                </div>
              </>
            )}
            <BottomNav screen={screen} setScreen={setScreen}/>
          </div>
        )}

        {/* CHECKLIST */}
        {screen==="checklist" && (
          <div className="screen" style={{paddingBottom:90}}>
            <div className="grid-bg" style={{padding:"52px 20px 20px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#818cf8",letterSpacing:2}}>CHECK-LIST</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:2,color:"#e2e8f0",marginTop:4}}>PREPARAÇÃO</div>
                </div>
                <button onClick={resetChecklist} style={{background:"rgba(99,102,241,.1)",border:"1px solid rgba(99,102,241,.25)",borderRadius:8,padding:"8px 14px",cursor:"pointer",color:"#818cf8",fontSize:11,fontFamily:"'IBM Plex Mono',monospace",letterSpacing:.5}}>↺ RESET</button>
              </div>
              <div style={{marginTop:16,background:"rgba(99,102,241,.07)",border:"1px solid rgba(99,102,241,.18)",borderRadius:12,padding:"14px 16px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                  <div style={{fontSize:13,color:"#94a3b8"}}>{doneItems} de {totalItems} itens concluídos</div>
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,color:progress===100?"#10b981":"#818cf8"}}>{progress}%</div>
                </div>
                <div className="progress-bar-track"><div className="progress-bar-fill" style={{width:`${progress}%`,background:progress===100?"linear-gradient(90deg,#10b981,#34d399)":"linear-gradient(90deg,#6366f1,#818cf8)"}}/></div>
                {progress===100&&<div style={{marginTop:10,fontFamily:"'IBM Plex Mono',monospace",fontSize:11,color:"#10b981",letterSpacing:1}}>✓ MISSÃO PRONTA — TODOS OS ITENS VERIFICADOS</div>}
              </div>
            </div>
            <div style={{padding:"16px 20px 100px",display:"flex",flexDirection:"column",gap:12}}>
              {checklist.map(cat=>{
                const catDone=cat.items.filter(it=>it.done).length;
                const catTotal=cat.items.length;
                const expanded=expandedCats[cat.id];
                return (
                  <div key={cat.id} style={{background:"rgba(255,255,255,.02)",border:`1px solid ${expanded?cat.color+"30":"rgba(255,255,255,.06)"}`,borderRadius:12,overflow:"hidden",transition:"border-color .2s"}}>
                    <div className="cat-header" onClick={()=>setExpandedCats(e=>({...e,[cat.id]:!e[cat.id]}))}>
                      <div style={{width:32,height:32,borderRadius:8,background:`${cat.color}18`,border:`1px solid ${cat.color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,color:cat.color,flexShrink:0}}>{cat.icon}</div>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:600,fontSize:14,color:"#e2e8f0"}}>{cat.label}</div>
                        <div style={{fontSize:11,color:"#475569",marginTop:2,fontFamily:"'IBM Plex Mono',monospace"}}>{catDone}/{catTotal} itens</div>
                      </div>
                      <div style={{display:"flex",alignItems:"center",gap:8}}>
                        <div style={{width:40,height:4,background:"rgba(255,255,255,.06)",borderRadius:2,overflow:"hidden"}}><div style={{width:catTotal?`${(catDone/catTotal)*100}%`:"0%",height:"100%",background:cat.color,borderRadius:2,transition:"width .3s"}}/></div>
                        <div style={{color:"#374151",fontSize:14,transition:"transform .2s",transform:expanded?"rotate(90deg)":"none"}}>›</div>
                      </div>
                    </div>
                    {expanded && (
                      <div style={{borderTop:"1px solid rgba(255,255,255,.04)"}}>
                        {cat.items.map(item=>(
                          <div key={item.id} className={`check-row ${item.done?"done-row":""}`} onClick={()=>toggleItem(cat.id,item.id)}>
                            <div className={`checkbox ${item.done?"checked":""}`} style={item.done?{background:cat.color}:{}}>{item.done&&<span style={{color:"#080c14",fontWeight:700}}>✓</span>}</div>
                            <div className="item-text" style={{flex:1,fontSize:13,color:"#cbd5e1",lineHeight:1.4}}>
                              {item.text}
                              {item.custom&&<span style={{marginLeft:6,fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:"#6366f1",background:"rgba(99,102,241,.15)",padding:"1px 5px",borderRadius:3,verticalAlign:"middle"}}>+ personalizado</span>}
                            </div>
                            <button className="del-btn" onClick={e=>{e.stopPropagation();removeItem(cat.id,item.id);}}>✕</button>
                          </div>
                        ))}
                        {cat.items.length===0&&<div style={{padding:"16px",textAlign:"center",color:"#374151",fontFamily:"'IBM Plex Mono',monospace",fontSize:11}}>Nenhum item</div>}
                        <div onClick={()=>{setNewItemCat(cat.id);setShowAddItem(true);}} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",cursor:"pointer",borderTop:"1px solid rgba(255,255,255,.03)",color:"#374151",fontSize:12,transition:"color .15s"}}
                          onMouseEnter={e=>e.currentTarget.style.color=cat.color} onMouseLeave={e=>e.currentTarget.style.color="#374151"}>
                          <span style={{fontSize:16,lineHeight:1}}>+</span>
                          <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,letterSpacing:.5}}>Adicionar item</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <button className="fab" style={{background:"#6366f1",boxShadow:"0 4px 20px rgba(99,102,241,.45)"}} onClick={()=>setShowAddItem(true)}>+</button>
            {showAddItem && (
              <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setShowAddItem(false)}>
                <div className="modal">
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:2,color:"#e2e8f0",marginBottom:4}}>NOVO ITEM</div>
                  <div style={{fontSize:12,color:"#475569",marginBottom:20}}>Adicione um item personalizado ao check-list</div>
                  <div style={{display:"flex",flexDirection:"column",gap:12}}>
                    <select className="input-field" value={newItemCat} onChange={e=>setNewItemCat(e.target.value)}>
                      {checklist.map(c=><option key={c.id} value={c.id}>{c.label}</option>)}
                    </select>
                    <textarea className="input-field" placeholder="Descreva o item a verificar..." value={newItemText} onChange={e=>setNewItemText(e.target.value)} rows={3} style={{resize:"none",lineHeight:1.5}} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();addChecklistItem();}}}/>
                    <div style={{display:"flex",gap:10,marginTop:4}}>
                      <button className="btn-ghost" style={{flex:1}} onClick={()=>setShowAddItem(false)}>Cancelar</button>
                      <button onClick={addChecklistItem} style={{flex:2,background:"#6366f1",color:"#fff",border:"none",borderRadius:8,padding:15,fontFamily:"'IBM Plex Sans',sans-serif",fontSize:14,fontWeight:700,cursor:"pointer"}}>ADICIONAR</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <BottomNav screen={screen} setScreen={setScreen}/>
          </div>
        )}

        {/* CONTACTS */}
        {screen==="contacts" && (
          <div className="screen" style={{paddingBottom:80}}>
            <div className="grid-bg" style={{padding:"52px 20px 24px"}}>
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#475569",letterSpacing:2}}>ACESSO RÁPIDO</div>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:2,color:"#ef4444",marginTop:6}}>EMERGÊNCIAS</div>
              {locationStatus==="done"&&locationData&&(
                <div style={{display:"flex",alignItems:"center",gap:6,marginTop:8,background:"rgba(99,102,241,.08)",border:"1px solid rgba(99,102,241,.2)",borderRadius:8,padding:"7px 12px",width:"fit-content"}}>
                  <span style={{fontSize:11}}>📍</span>
                  <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#818cf8",letterSpacing:.5}}>{locationData.city||locationData.state||locationData.country} · NÚMEROS ATUALIZADOS</span>
                </div>
              )}
            </div>
            <div style={{padding:"16px 20px",display:"flex",flexDirection:"column",gap:14}}>
              <div>
                <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#475569",letterSpacing:1.5,marginBottom:8}}>SERVIÇOS DE EMERGÊNCIA {locationStatus==="done"?"· AUTO-ATUALIZADO PELO GPS":""}</div>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {contacts.filter(c=>c.system).map(c=>(
                    <div key={c.id} style={{background:"rgba(239,68,68,.05)",border:"1px solid rgba(239,68,68,.18)",borderRadius:12,padding:"14px 16px",display:"flex",alignItems:"center",gap:14}}>
                      <div style={{fontSize:26,flexShrink:0}}>{c.icon}</div>
                      <div style={{flex:1}}>
                        <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:"#ef4444",letterSpacing:1}}>{c.type.toUpperCase()}</div>
                        <div style={{fontWeight:600,fontSize:14,color:"#e2e8f0",marginTop:2}}>{c.name}</div>
                      </div>
                      <a href={`tel:${c.phone}`} style={{textDecoration:"none"}}>
                        <div style={{background:"rgba(239,68,68,.15)",border:"1px solid rgba(239,68,68,.3)",borderRadius:8,padding:"8px 14px",textAlign:"center",minWidth:64}}>
                          <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:20,color:"#ef4444",letterSpacing:1}}>{c.phone}</div>
                          <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:9,color:"#ef4444",opacity:.7}}>LIGAR</div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              {locationStatus!=="done" && (
                <div style={{background:"rgba(99,102,241,.06)",border:"1px solid rgba(99,102,241,.15)",borderRadius:12,padding:14,display:"flex",gap:12,alignItems:"center"}}>
                  <span style={{fontSize:22}}>📍</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,color:"#94a3b8",lineHeight:1.5}}>Ative o GPS para atualizar automaticamente os números de emergência para sua localização atual.</div>
                    <button onClick={()=>setScreen("risks")} style={{marginTop:8,background:"none",border:"1px solid rgba(99,102,241,.3)",borderRadius:6,padding:"6px 12px",color:"#818cf8",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:12,cursor:"pointer"}}>Ativar GPS →</button>
                  </div>
                </div>
              )}
              {contacts.filter(c=>!c.system).length>0 && (
                <div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#475569",letterSpacing:1.5,marginBottom:8}}>MEUS CONTATOS</div>
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {contacts.filter(c=>!c.system).map(c=>(
                      <div key={c.id} className="card" style={{padding:"16px 18px"}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                          <div>
                            <span className="tag" style={{background:"rgba(245,158,11,.1)",color:"#f59e0b",border:"1px solid rgba(245,158,11,.25)",marginBottom:8,display:"inline-block"}}>{c.type.toUpperCase()}</span>
                            <div style={{fontWeight:600,fontSize:15,color:"#e2e8f0"}}>{c.name}</div>
                          </div>
                          <div style={{display:"flex",gap:6}}>
                            <button onClick={()=>openEditContact(c)} style={{background:"rgba(255,255,255,.05)",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer",color:"#64748b",fontSize:14}}>✏</button>
                            <button onClick={()=>deleteContact(c.id)} style={{background:"rgba(239,68,68,.1)",border:"none",borderRadius:6,padding:"6px 10px",cursor:"pointer",color:"#ef4444",fontSize:14}}>✕</button>
                          </div>
                        </div>
                        <div className="section-divider"/>
                        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                          {c.phone&&<a href={`tel:${c.phone}`} style={{textDecoration:"none"}}><button style={{display:"flex",alignItems:"center",gap:6,background:"rgba(16,185,129,.1)",border:"1px solid rgba(16,185,129,.25)",borderRadius:6,padding:"7px 12px",cursor:"pointer",color:"#10b981",fontSize:13,fontFamily:"'IBM Plex Mono',monospace"}}>📞 {c.phone}</button></a>}
                          {c.email&&<a href={`mailto:${c.email}`} style={{textDecoration:"none"}}><button style={{display:"flex",alignItems:"center",gap:6,background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:6,padding:"7px 12px",cursor:"pointer",color:"#f59e0b",fontSize:12,fontFamily:"'IBM Plex Mono',monospace"}}>✉ E-mail</button></a>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button className="fab" style={{background:"#f59e0b",boxShadow:"0 4px 20px rgba(245,158,11,.4)"}} onClick={()=>{setEditContact(null);setNewContact({type:"Advogado",name:"",phone:"",email:""});setShowAddContact(true);}}>+</button>
            {showAddContact && (
              <div className="modal-overlay" onClick={e=>e.target===e.currentTarget&&setShowAddContact(false)}>
                <div className="modal">
                  <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:22,letterSpacing:2,color:"#e2e8f0",marginBottom:20}}>{editContact?"EDITAR CONTATO":"NOVO CONTATO"}</div>
                  <div style={{display:"flex",flexDirection:"column",gap:12}}>
                    <select className="input-field" value={newContact.type} onChange={e=>setNewContact({...newContact,type:e.target.value})}>
                      {["Advogado","Segurança Institucional","Embaixada","Familiar","Colega","Médico","Outro"].map(t=><option key={t}>{t}</option>)}
                    </select>
                    <input className="input-field" placeholder="Nome / Organização" value={newContact.name} onChange={e=>setNewContact({...newContact,name:e.target.value})}/>
                    <input className="input-field" placeholder="Telefone" type="tel" value={newContact.phone} onChange={e=>setNewContact({...newContact,phone:e.target.value})}/>
                    <input className="input-field" placeholder="E-mail (opcional)" type="email" value={newContact.email} onChange={e=>setNewContact({...newContact,email:e.target.value})}/>
                    <div style={{display:"flex",gap:10,marginTop:8}}>
                      <button className="btn-ghost" style={{flex:1}} onClick={()=>setShowAddContact(false)}>Cancelar</button>
                      <button className="btn-primary" style={{flex:2}} onClick={saveContact}>{editContact?"SALVAR EDIÇÃO":"ADICIONAR"}</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <BottomNav screen={screen} setScreen={setScreen}/>
          </div>
        )}

        {/* SETTINGS */}
        {screen==="settings" && (
          <div className="screen" style={{paddingBottom:80}}>
            <div className="grid-bg" style={{padding:"52px 20px 24px"}}>
              <button onClick={()=>setScreen("home")} style={{background:"none",border:"none",color:"#f59e0b",fontSize:13,cursor:"pointer",marginBottom:12,fontFamily:"'IBM Plex Sans',sans-serif"}}>← Voltar</button>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:2,color:"#e2e8f0"}}>CONFIGURAÇÕES</div>
            </div>
            <div style={{padding:"20px"}}>
              <div style={{background:"rgba(245,158,11,.06)",border:"1px solid rgba(245,158,11,.15)",borderRadius:12,padding:"16px 18px",marginBottom:24,display:"flex",alignItems:"center",gap:14}}>
                <div style={{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg,#f59e0b44,#f59e0b22)",border:"1px solid #f59e0b44",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Bebas Neue',sans-serif",fontSize:20,color:"#f59e0b"}}>{user?.name?.[0]}</div>
                <div>
                  <div style={{fontWeight:600,fontSize:15,color:"#e2e8f0"}}>{user?.name}</div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:11,color:"#475569",marginTop:2}}>{user?.email}</div>
                </div>
              </div>
              {locationStatus==="done"&&locationData&&(
                <div style={{background:"rgba(99,102,241,.06)",border:"1px solid rgba(99,102,241,.15)",borderRadius:12,padding:"14px 18px",marginBottom:24}}>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#818cf8",letterSpacing:1,marginBottom:6}}>📍 LOCALIZAÇÃO ATUAL</div>
                  <div style={{fontSize:14,color:"#e2e8f0",fontWeight:500}}>{[locationData.city,locationData.state,locationData.country].filter(Boolean).join(", ")}</div>
                  <div style={{fontSize:11,color:"#475569",marginTop:4,fontFamily:"'IBM Plex Mono',monospace"}}>GPS: {locationData.lat?.toFixed(4)}, {locationData.lng?.toFixed(4)}</div>
                </div>
              )}
              {[
                {label:"CONTA",items:[{icon:"👤",label:"Editar Perfil",sub:"Altere seu nome de exibição"},{icon:"🔐",label:"Alterar Senha",sub:"Recomendado a cada 90 dias"}]},
                {label:"APLICATIVO",items:[{icon:"ℹ️",label:"Sobre este App",sub:"Versão 1.0.0 · Guia de Bolso"},{icon:"📄",label:"Termos e Privacidade",sub:"Política de dados e uso"},{icon:"💬",label:"Enviar Feedback",sub:"Ajude a melhorar o app"}]}
              ].map(group=>(
                <div key={group.label} style={{marginBottom:24}}>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#475569",letterSpacing:2,marginBottom:10}}>{group.label}</div>
                  <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:12,overflow:"hidden"}}>
                    {group.items.map((item,i)=>(
                      <button key={i} style={{display:"flex",alignItems:"center",gap:14,width:"100%",padding:"15px 18px",background:"none",border:"none",borderBottom:i<group.items.length-1?"1px solid rgba(255,255,255,.04)":"none",cursor:"pointer",textAlign:"left"}}>
                        <span style={{fontSize:18}}>{item.icon}</span>
                        <div style={{flex:1}}><div style={{fontSize:14,fontWeight:500,color:"#e2e8f0"}}>{item.label}</div><div style={{fontSize:12,color:"#475569",marginTop:1}}>{item.sub}</div></div>
                        <div style={{color:"#374151",fontSize:16}}>›</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={handleLogout} style={{width:"100%",background:"rgba(239,68,68,.08)",border:"1px solid rgba(239,68,68,.2)",borderRadius:10,padding:15,color:"#ef4444",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:14,fontWeight:600,cursor:"pointer"}}>Sair (Logout)</button>
              <div style={{textAlign:"center",marginTop:24,fontFamily:"'IBM Plex Mono',monospace",fontSize:10,color:"#1e2936"}}>GUIA DE BOLSO · SEGURANÇA PESSOAL · v1.0</div>
            </div>
            <BottomNav screen={screen} setScreen={setScreen}/>
          </div>
        )}

      </div>
    </>
  );
}

function BottomNav({screen,setScreen}){
  const items=[
    {id:"home",      icon:"⌂",  label:"Início"},
    {id:"risks",     icon:"📍", label:"Riscos"},
    {id:"checklist", icon:"☑",  label:"Check-list"},
    {id:"contacts",  icon:"☎",  label:"Emergência"},
    {id:"settings",  icon:"⚙",  label:"Config"},
  ];
  return(
    <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,background:"rgba(8,12,20,.97)",backdropFilter:"blur(20px)",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",zIndex:50}}>
      {items.map(item=>(
        <button key={item.id} className={`nav-item ${(screen===item.id||(screen==="guide"&&item.id==="home"))?"active":""}`} onClick={()=>setScreen(item.id)}>
          <span style={{fontSize:15}}>{item.icon}</span>{item.label}
        </button>
      ))}
    </div>
  );
}
