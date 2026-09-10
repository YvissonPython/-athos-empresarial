'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Building2, Landmark, LineChart, Menu, ShieldCheck, Sparkles } from 'lucide-react';

const pains = [
  ['Faturamento cresce, mas o caixa não acompanha', 'Vender mais não significa, por si só, enxergar margem e geração de caixa.'],
  ['Carga tributária sem estratégia', 'Cumprir obrigações é o básico. A estrutura precisa continuar adequada ao crescimento.'],
  ['Decisões importantes sem números confiáveis', 'Expansão, contratação e investimento pedem informação gerencial clara.'],
  ['Financeiro e contabilidade desconectados', 'Dados isolados não se transformam automaticamente em inteligência.'],
];

const solutions = [
  { icon: BarChart3, title: 'Inteligência Contábil', text: 'Informação organizada para compreender a operação e apoiar decisões empresariais.' },
  { icon: Landmark, title: 'Fiscal & Tributário', text: 'Conformidade, leitura da estrutura tributária e acompanhamento compatível com a evolução do negócio.' },
  { icon: LineChart, title: 'BPO Financeiro', text: 'Rotinas financeiras mais estruturadas, indicadores e visão gerencial para ganhar controle.' },
  { icon: Building2, title: 'Societário & Estrutura', text: 'Suporte para organizar a estrutura empresarial conforme novos ciclos e necessidades.' },
];

const growth = ['R$ 100 mil', 'R$ 300 mil', 'R$ 500 mil', 'R$ 1 milhão+'];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#inicio" aria-label="Athos Empresarial"><span className="brandMark">A</span><span>ATHOS <b>EMPRESARIAL</b></span></a>
        <nav className="desktopNav"><a href="#solucoes">Soluções</a><a href="#metodo">Como atuamos</a><a href="#insights">Insights</a><a href="#sobre">Sobre</a></nav>
        <a className="navCta" href="#diagnostico">Falar com especialista <ArrowRight size={16}/></a>
        <button className="menu" aria-label="Abrir menu"><Menu/></button>
      </header>

      <section className="hero section" id="inicio">
        <div className="heroGrid" />
        <motion.div className="heroCopy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="eyebrow"><Sparkles size={14}/> Inteligência empresarial para quem está crescendo</div>
          <h1>Sua empresa cresceu.<br/><span>Sua gestão acompanhou?</span></h1>
          <p className="lead">Contabilidade, inteligência financeira e estratégia tributária para empresas que precisam tomar decisões maiores com números mais claros.</p>
          <div className="actions"><a className="primary" href="#diagnostico">Solicitar diagnóstico empresarial <ArrowRight size={18}/></a><a className="secondary" href="#sobre">Conhecer a Athos</a></div>
          <div className="competencies">Contábil <i/> Fiscal <i/> Tributário <i/> BPO Financeiro <i/> Societário</div>
        </motion.div>

        <div className="heroVisual" aria-hidden="true">
          <motion.div className="aura" animate={{rotate:360}} transition={{duration:30,repeat:Infinity,ease:'linear'}} />
          <motion.div className="athosA" animate={{y:[0,-12,0],rotateY:[-8,8,-8]}} transition={{duration:6,repeat:Infinity,ease:'easeInOut'}}>A</motion.div>
          <span className="orbit o1">CAIXA</span><span className="orbit o2">MARGEM</span><span className="orbit o3">TRIBUTOS</span><span className="orbit o4">CRESCIMENTO</span>
        </div>
        <div className="scrollHint">ROLE PARA EXPLORAR <span/></div>
      </section>

      <section className="section painSection">
        <div className="sectionHead"><span className="kicker">O CUSTO DA COMPLEXIDADE</span><h2>Quando uma empresa cresce,<br/>os erros ficam <em>mais caros.</em></h2></div>
        <div className="painGrid">{pains.map(([title,text],i)=><motion.article key={title} className="painCard" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
        <p className="bridge">A Athos atua justamente na distância entre <b>faturar mais</b> e <b>gerir melhor.</b></p>
      </section>

      <section className="section growthSection">
        <span className="kicker">CRESCIMENTO MUDA O JOGO</span><h2>Mais faturamento traz<br/><em>mais complexidade.</em></h2>
        <p className="muted max">As faixas abaixo ilustram diferentes estágios de crescimento empresarial. Conforme a operação avança, decisões simples passam a exigir mais contexto.</p>
        <div className="growthLine">{growth.map((v,i)=><div className="growthPoint" key={v}><span>{v}</span><i/><small>{['OPERAÇÃO','PROCESSOS','GESTÃO','INTELIGÊNCIA'][i]}</small></div>)}</div>
        <div className="complexity">mais faturamento <ArrowRight/> mais obrigações <ArrowRight/> mais equipe <ArrowRight/> mais processos <ArrowRight/> mais risco</div>
        <blockquote>“Quanto maior a empresa, mais caro custa tomar decisões sem informação.”</blockquote>
      </section>

      <section className="section" id="solucoes">
        <div className="splitHead"><div><span className="kicker">PILARES DE GESTÃO</span><h2>Números que ajudam a<br/><em>enxergar o negócio.</em></h2></div><p>Não tratamos cada área como uma ilha. A proposta é transformar informação contábil e financeira em contexto para a gestão.</p></div>
        <div className="solutionGrid">{solutions.map(({icon:Icon,title,text},i)=><article className="solution" key={title}><div className="solutionTop"><Icon/><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><a href="#diagnostico">Entender esta frente <ArrowRight size={15}/></a></article>)}</div>
        <div className="secondaryService"><ShieldCheck/><div><small>SOLUÇÃO COMPLEMENTAR</small><b>Proteção e Registro de Marca</b></div><ArrowRight/></div>
      </section>

      <section className="section human" id="sobre">
        <div className="videoPlaceholder"><div className="play">▶</div><span>VÍDEO • ESPECIALISTA ATHOS</span></div>
        <div className="humanCopy"><span className="kicker">AUTORIDADE QUE PARTICIPA</span><h2>Números não deveriam apenas explicar o passado.</h2><h3>Eles precisam ajudar você a decidir o próximo passo.</h3><p>Na Athos, informação contábil e financeira é transformada em contexto para apoiar decisões empresariais mais seguras.</p><a className="textLink" href="#diagnostico">Conversar com um especialista <ArrowRight size={16}/></a></div>
      </section>

      <section className="section method" id="metodo"><span className="kicker">COMO ATUAMOS</span><h2>Clareza antes da <em>decisão.</em></h2><div className="methodGrid">{[['01','Diagnóstico','Leitura dos números, contexto e principais gargalos.'],['02','Estratégia','Definição de prioridades e plano adequado à operação.'],['03','Implementação','Organização das rotinas e processos aplicáveis.'],['04','Acompanhamento','Indicadores, contexto e próximos passos.']].map(x=><article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>

      <section className="section insights" id="insights"><div><span className="kicker">INSIGHTS ATHOS</span><h2>Conteúdo para quem<br/><em>precisa decidir.</em></h2></div><div className="insightTags"><span>Tributário</span><span>Caixa</span><span>BPO</span><span>Crescimento</span><span>Riscos</span><small>Em breve: análises e vídeos dos especialistas Athos.</small></div></section>

      <section className="section diagnostic" id="diagnostico">
        <div className="diagnosticCopy"><span className="kicker">DIAGNÓSTICO EMPRESARIAL</span><h2>Sua empresa já cresceu.<br/><em>Agora a gestão precisa estar no mesmo nível.</em></h2><p>Conte um pouco sobre a operação. Essas informações ajudam a direcionar a conversa inicial para o que realmente importa.</p></div>
        <form className="form" onSubmit={(e)=>e.preventDefault()}><label>Nome<input required placeholder="Seu nome"/></label><label>Empresa<input required placeholder="Nome da empresa"/></label><div className="formRow"><label>WhatsApp<input required placeholder="(00) 00000-0000"/></label><label>E-mail <small>opcional</small><input type="email" placeholder="voce@empresa.com.br"/></label></div><label>Segmento<input required placeholder="Ex.: varejo, serviços, indústria..."/></label><label>Faturamento médio mensal<select required defaultValue=""><option value="" disabled>Selecione uma faixa</option><option>Até R$ 100 mil</option><option>R$ 100–300 mil</option><option>R$ 300–500 mil</option><option>R$ 500 mil–R$ 1 milhão</option><option>Acima de R$ 1 milhão</option></select></label><label>Principal desafio <small>opcional</small><select defaultValue=""><option value="">Selecione</option><option>Tributário</option><option>Financeiro / caixa</option><option>Contabilidade / indicadores</option><option>Estrutura societária</option><option>Crescimento / organização</option><option>Outro</option></select></label><button className="primary submit" type="submit">Solicitar diagnóstico empresarial <ArrowRight size={18}/></button><small className="privacy">Seus dados serão usados apenas para contato relacionado à solicitação.</small></form>
      </section>

      <footer><a className="brand" href="#inicio"><span className="brandMark">A</span><span>ATHOS <b>EMPRESARIAL</b></span></a><p>Inteligência contábil e financeira para empresas que estão crescendo.</p><span>© Athos Empresarial</span></footer>
    </main>
  );
}
