/**
 * Orpheus Lau Portfolio - Interactive Scripts
 * Handles portfolio filtering, case study modal deep dives,
 * keyboard accessibility, hash navigation, and micro-interactions.
 */

// Project Data Registry
const PROJECTS = [
  {
    id: "dse-bot",
    legacyId: "dse-bot-details",
    category: "ai",
    title: "DSE Bot: Multi-Agent Admissions & Empathetic Counseling",
    subtitle: "Multi-Agent Orchestration (MAO): Specialized Agents × Trusted Data × Deterministic Calculation",
    stack: "Multi-Agent · Python Math Engine · LM Studio Local LLM · Redis · Docker · Cloud Run · 2026",
    summary: "Engineered in 2026 to support Hong Kong secondary candidates and social workers during the HKDSE results release. Orchestrates 4 specialized agents (Router, University Identifier, Programme Matcher, Response Generator) to decouple exact JUPAS admission score math from empathetic Cantonese counseling.",
    coverImage: "assets/img/dsebot/DSEbot.png",
    featuredDiagram: {
      src: "assets/img/dsebot/DSEbot.png",
      caption: "Multi-Agent Orchestration (MAO) Architecture: 4 Specialized Agents × Trusted Data × Deterministic Math Engine"
    },
    meta: {
      period: "2026",
      type: "Multi-Agent AI / Deterministic Calculation",
      client: "Hong Kong Youth Guidance & HKDSE Candidates",
      privacy: "Zero Hallucination / Formula Verified"
    },
    challenge: "Standard generative LLMs frequently hallucinate complex admission scores, percentile cutoffs, and university formula weightings. During high-stakes 2026 Hong Kong Diploma of Secondary Education (HKDSE) result-release periods, a miscalculated score or inaccurate JUPAS recommendation can severely misguide a student's academic future and amplify acute psychological distress.",
    solution: "Developed in 2026, the Multi-Agent Orchestration (MAO) pipeline dynamically divides tasks across 4 specialized agents. An Agent Router normalizes user queries (Cantonese/English); a University Identifier standardizes aliases (e.g. 港大/香港大學 -> HKU); a Programme Matcher aligns career aspirations with canonical JUPAS degree codes (e.g. 社工 -> JS3720); and a dedicated Python Math Engine executes deterministic formula weighting against official admission statistics. Finally, an Empathetic Response Generator provides anxiety-reducing guidance without doing token-based arithmetic.",
    pillars: [
      { title: "Agent 1: Router & Extractor", desc: "Performs intent detection, extracts DSE grades (e.g., 中文4 英文5* 數學5), identifies target universities/programmes, and normalizes conversational user input." },
      { title: "Agent 2: University Identifier", desc: "Handles colloquial expressions and dialect aliases (e.g., 港大 / HKU / 香港大學 -> HKU), mapping user input to canonical university identifiers." },
      { title: "Agent 3: Programme Matcher", desc: "Translates student career aspirations into specific degree programs and JUPAS codes (e.g., 社工 -> Bachelor of Social Work -> JS3720) with compatibility validation." },
      { title: "Agent 4: Response Generator", desc: "Synthesizes verified calculation results into a warm, natural Cantonese conversational reply with psychological guardrails and sub-degree pathway advice (no calculations performed in LLM)." },
      { title: "Python Deterministic Math Engine", desc: "Bypasses generative token prediction entirely to execute exact university weighting rules, mandatory scales, and Best-N formulas against official JUPAS cutoffs." },
      { title: "Local LLM & Redis Infrastructure", desc: "Powered by LM Studio for offline natural language understanding, paired with Redis caching for conversation state, session management, and containerized Cloud Run autoscaling." }
    ],
    codeSnippet: `# Multi-Agent Orchestration (MAO) Pipeline for DSE Chatbot
from typing import Dict, List, Optional
from dataclasses import dataclass

@dataclass
class NormalizedQuery:
    intent: str
    grades: Dict[str, int]
    target_uni: str
    career_interest: str

class DSEMultiAgentOrchestrator:
    def __init__(self, local_llm, jupas_db, math_engine, redis_cache):
        self.llm = local_llm                # LM Studio Local LLM
        self.jupas_db = jupas_db            # Trusted Data Source
        self.math_engine = math_engine      # Deterministic Python Engine
        self.cache = redis_cache            # Session State Cache

    def execute_admissions_pipeline(self, user_msg: str, session_id: str) -> dict:
        # Agent 1: Router & Information Extractor
        parsed = self.agent1_router_extractor(user_msg)
        
        # Agent 2: University Identifier (Alias Resolution: 港大 -> HKU)
        canonical_uni = self.agent2_uni_identifier(parsed.target_uni)
        
        # Agent 3: Programme Matcher (社工 -> JS3720 Bachelor of Social Work)
        prog_match = self.agent3_prog_matcher(parsed.career_interest, canonical_uni)
        
        # Deterministic Tool Execution: Python Math Engine (Zero Hallucination)
        math_result = self.math_engine.calculate_jupas_score(
            grades=parsed.grades,
            program_code=prog_match.code,
            weighting_rules=self.jupas_db.get_weights(prog_match.code)
        )
        
        # Agent 4: Empathetic Response Generator (Cantonese + Supportive Guidance)
        reply = self.agent4_response_generator(
            math_result=math_result,
            historical_median=prog_match.historical_median,
            user_tone="anxious"
        )
        
        return {
            "weighted_score": math_result.score,
            "relative_rank": math_result.percentile,
            "response": reply
        }`,
    gallery: [
      { src: "assets/img/dsebot/DSEbot.png", caption: "Multi-Agent Orchestration (MAO) Architecture: 4 Specialized Agents × Trusted Data × Deterministic Math Engine" },
      { src: "assets/img/dsebot/BD1B3F27-5DDF-4FB4-9BF5-BD9E9C628195_1_201_a.jpeg", caption: "HKDSE AI Advisory Agent: Mobile Conversational Consultation & Career Matching" },
      { src: "assets/img/dsebot/507D4807-7C35-49C9-89FD-0130B33953B2_1_201_a.jpeg", caption: "JUPAS Admissions Counseling: Score Simulation & Admission Probability Analysis" },
      { src: "assets/img/dsebot/320f4ff1813613defeea3befd2ecc8aa143060c7f6d1ddbdd85ed4e5e8704890.png", caption: "Interactive Advisory Flow: Subject Grade Input & Academic Goal Selection" },
      { src: "assets/img/dsebot/4868dbe219085a27e0726f5f24200e92c7f197f085ffda62daf732fdc1d16116.png", caption: "Deterministic Score Engine: University Formula Weighting & Calculation" },
      { src: "assets/img/dsebot/abc8f27a1b69b7858971e1a7d0f94463a0c51dd0191343d65beedb2545523fc4.png", caption: "Programme Recommendation Matrix: Band A/B Strategy & Historical Medians" },
      { src: "assets/img/dsebot/bd69ec9d5941e9267374996c64babf5be19c216e58b3ccc1522cf98d2d04970d.png", caption: "Empathetic Advisory Dialogue: Actionable Guidance & Counseling Insights" },
      { src: "assets/img/dse_bot_cover.svg", caption: "Cloud Run Infrastructure & Guardrail Schematic" }
    ],
    links: [
      { label: "View Architecture PNG", url: "assets/img/dsebot/DSEbot.png", icon: "fa-diagram-project", primary: true },
      { label: "View Advisory Interface", url: "assets/img/dsebot/BD1B3F27-5DDF-4FB4-9BF5-BD9E9C628195_1_201_a.jpeg", icon: "fa-comments" }
    ]
  },
  {
    id: "lsg-navigator",
    legacyId: "lsg-navigator-details",
    category: "ai",
    title: "Caritas LSG & LF AI Navigator",
    subtitle: "Empowering Hong Kong NGOs with AI-Powered Policy Guidance & Statutory Governance",
    stack: "Enterprise RAG · Google Gemini · Next.js · BigQuery Vector Search · Tailwind CSS · 2026",
    summary: "Developed in 2026 for Hong Kong non-governmental organizations and social service leadership. Features a dual sparse-dense retrieval engine with Reciprocal Rank Fusion (RRF) providing sentence-level grounded citations across hundreds of Social Welfare Department (SWD) Lump Sum Grant and Lotteries Fund clauses.",
    coverImage: "assets/img/lsg_navigator/caritas_lsg_architecture.png",
    featuredDiagram: {
      src: "assets/img/lsg_navigator/caritas_lsg_architecture.png",
      caption: "Caritas LSG & LF AI Navigator: Enterprise RAG Architecture & System Pipeline"
    },
    meta: {
      period: "2026",
      type: "Enterprise Hybrid RAG / Statutory Governance",
      client: "Caritas Hong Kong / Social Welfare NGOs",
      privacy: "Strict Statutory Grounding / SWD Compliant"
    },
    challenge: "The Social Welfare Department (SWD) Lump Sum Grant (LSG) and Lotteries Fund (LF) manuals contain hundreds of cross-referenced clauses, circulars, and virement rules. Standard keyword search misses semantic intent, while general LLMs risk hallucinating compliance regulations with severe statutory liability.",
    solution: "Architected in 2026 as an enterprise Hybrid RAG system pairing BM25 sparse lexical search for exact circular codes with BigQuery Vector Search (powered by Vertex AI text-embedding-004) for conceptual queries. Both pipelines merge via Reciprocal Rank Fusion (RRF), prompting Google Gemini with strict statutory grounding to deliver clause-verified audit guidance and decision support.",
    pillars: [
      { title: "Dual Retrieval Pipelines", desc: "Sparse Lexical Search (BM25) retrieves exact statutory references, circular numbers, and financial clause codes; Dense Semantic Vector Search (BigQuery & Vertex AI) retrieves high-level conceptual context." },
      { title: "Reciprocal Rank Fusion (RRF)", desc: "Merges both ranked result sets based on ordinal positions rather than incompatible distance metrics." },
      { title: "Strict Clause Grounding", desc: "Forces Gemini to output sentence-level citations referencing exact chapters, clauses, and annexes from official manuals." },
      { title: "Next.js Full-Stack Architecture", desc: "Responsive administrative interface integrating Google Vertex AI and BigQuery vector indexes." }
    ],
    codeSnippet: `// Hybrid RAG Retrieval with Reciprocal Rank Fusion (RRF)
export async function hybridRetrievePolicy(query: string, k: number = 60): Promise<ScoredClause[]> {
  // 1. Parallel execution: Sparse Lexical (BM25) & Dense Semantic (BigQuery Vector)
  const [lexicalHits, semanticHits] = await Promise.all([
    bm25Index.search(query, { topK: 25 }),
    bigQueryClient.vectorSearch({
      table: "swd_lsg_lf_clauses",
      column: "embedding",
      queryText: query,
      model: "text-embedding-004",
      topK: 25
    })
  ]);

  // 2. Reciprocal Rank Fusion (RRF) on Ordinal Rankings
  const fusedScores = new Map<string, { clause: ScoredClause; score: number }>();
  
  const mergeList = (results: ScoredClause[]) => {
    results.forEach((item, rank) => {
      const entry = fusedScores.get(item.clauseId) || { clause: item, score: 0 };
      entry.score += 1 / (k + rank + 1); // RRF Score formula
      fusedScores.set(item.clauseId, entry);
    });
  };

  mergeList(lexicalHits);
  mergeList(semanticHits);

  // 3. Return sorted documents for strictly grounded Gemini synthesis
  return Array.from(fusedScores.values())
    .sort((a, b) => b.score - a.score)
    .map(e => e.clause);
}`,
    gallery: [
      { src: "assets/img/lsg_navigator/caritas_lsg_architecture.png", caption: "Caritas LSG & LF AI Navigator: System Architecture Diagram" },
      { src: "assets/img/lsg_navigator/LSGnavigator.png", caption: "Administrative Governance Interface & Policy Assistant" },
      { src: "assets/img/lsg_navigator/LSGnavigator_p2.png", caption: "Reciprocal Rank Fusion (RRF) & Dense/Sparse Query Pipeline" },
      { src: "assets/img/lsg_navigator/LSGnavigator_p3.png", caption: "SWD Policy Manuals Knowledge Explorer & Clause Citations" },
      { src: "assets/img/lsg_navigator_cover.svg", caption: "Interactive RAG Schematic Overview" }
    ],
    links: [
      { label: "View Architecture PNG", url: "assets/img/lsg_navigator/caritas_lsg_architecture.png", icon: "fa-diagram-project", primary: true }
    ]
  },
  {
    id: "messengers-of-hope",
    legacyId: "messengers-of-hope-details",
    category: "ai",
    title: "Historical exhibition of the Catholic Diocese of HK",
    subtitle: "Archival RAG & Multilingual Curatorial Docent for Catholic Diocese 80th Exhibition",
    stack: "Archival RAG · Embeddings · Context Guardrails · Multilingual Kiosk / Web · 2026",
    summary: "Developed in 2026 for the 80th anniversary public exhibition at Caritas House. An interactive AI docent serving eight decades of diocesan archives in Cantonese, English, and Mandarin with strict theological fidelity and curatorial neutrality guardrails.",
    coverImage: "assets/img/diocese80/diocese80_architecture.png",
    featuredDiagram: {
      src: "assets/img/diocese80/diocese80_architecture.png",
      caption: 'Catholic Diocese 80th Anniversary "Messengers of Hope" Archival RAG & Multilingual AI Docent System Architecture'
    },
    meta: {
      period: "2026",
      type: "Archival RAG / Multilingual AI Kiosk Docent",
      client: "Catholic Diocese of Hong Kong 80th Exhibition",
      privacy: "Theological Fidelity & Curatorial Guardrails"
    },
    challenge: "Static museum placards cannot adapt to diverse visitor backgrounds, while human docents cannot scale during peak exhibition hours or provide instant multilingual deep-dives into historical archives. Furthermore, general conversational models risk speculating on sensitive church history without strict verification.",
    solution: "Developed in 2026, this Archival RAG interactive docent is deployed on on-site public exhibition kiosks and mobile web. The system ingests eight decades of diocesan documentation, parish records, and exhibition catalog entries, enforcing theological fidelity and curatorial neutrality guardrails while dynamically switching between Cantonese, English, and Mandarin with synchronized audio narration.",
    pillars: [
      { title: "Front-End Intent & Language Classifier", desc: "Detects visitor language (Cantonese, English, or Mandarin) and categorizes queries (artifact provenance, chronological timeline, or gallery navigation)." },
      { title: "80-Year Archival Vector Store", desc: "Ingests eight decades of diocesan documentation, parish records, and exhibition catalog entries dating from post-war 1946 to present." },
      { title: "Theological & Historical Guardrails", desc: "Enforces curatorial neutrality and theological fidelity, strictly preventing speculation on sensitive historical periods or figures." },
      { title: "Multilingual Docent Synthesizer", desc: "Blends retrieved archival facts with a curated docent persona to deliver accessible, educational responses across voice and screen." }
    ],
    codeSnippet: `// Multilingual Docent Synthesizer with Theological & Curatorial Guardrails
export async function generateDocentResponse(
  query: string,
  userLocale: "yue_HK" | "zh_TW" | "en_US",
  zoneContext: string
) {
  // 1. Archival RAG Vector Search
  const archivalDocs = await diocesanArchiveVectorStore.search(query, {
    filter: { exhibition_zone: zoneContext },
    topK: 4
  });

  // 2. Synthesize with Curatorial Guardrails
  const docentResponse = await geminiClient.generateContent({
    model: "gemini-2.5-flash",
    systemInstruction: \`You are the AI Docent for the Catholic Diocese 80th Anniversary Exhibition at Caritas House ("Messengers of Hope").
Output language: \${userLocale === 'yue_HK' ? 'Spoken Cantonese (Traditional)' : userLocale === 'zh_TW' ? 'Traditional Chinese' : 'English'}.
Strict Curatorial Guardrails:
1. Ground facts strictly in the 80-year diocesan archive provided. Do not invent unverified historical claims.
2. Embody the exhibition theme: "Messengers of Hope" — uplifting, educational, and respectful.
3. If an inquiry is outside the exhibition scope, politely invite the guest to consult the archival catalog at the front desk.\`,
    contents: [{ role: "user", parts: [{ text: \`Gallery Context: \${JSON.stringify(archivalDocs)}\\nVisitor Query: \${query}\` }] }]
  });

  return docentResponse.text;
}`,
    gallery: [
      { src: "assets/img/diocese80/diocese80_architecture.png", caption: "System Architecture: Archival RAG, Multilingual Ingestion, Guardrails & Cloud Run Infrastructure" },
      { src: "assets/img/diocese80/F1A2CD1A-79C8-4BF4-883C-3A1011799F25_1_201_a.jpeg", caption: "Exhibition Welcome & AI Tour Guide Interface" },
      { src: "assets/img/diocese80/0152F92F-C55A-4879-A2D5-2FD02C37F238_1_201_a.jpeg", caption: "Multilingual Archival Docent Dialogue & Historical Inquiries" },
      { src: "assets/img/diocese80/4B5F00F3-A873-4041-821F-E8FD03B1A89E_1_201_a.jpeg", caption: "80-Year Archival Timeline & Catholic Historical Chronology" },
      { src: "assets/img/diocese80/93FDCDC5-4504-4F9E-A012-20C0E474853D_1_201_a.jpeg", caption: "Parish Historical Records & Heritage Catalog Navigation" },
      { src: "assets/img/diocese80/2E499BE8-BF2C-4A90-B295-81C32A65D279_1_201_a.jpeg", caption: "Interactive Kiosk Exhibition Experience & Live Queries" },
      { src: "assets/img/diocese80/AC92C53D-505C-46D2-BDF9-BFF70FE94E9D_1_201_a.jpeg", caption: "Artifact Provenance, Curatorial Notes & Theological Details" },
      { src: "assets/img/messengers_of_hope_cover.svg", caption: "Archival RAG Pipeline & Curatorial Guardrails Architecture" }
    ],
    links: [
      { label: "YouTube Demo: Narration & AI Chatbot", url: "https://youtube.com/shorts/IP0l9c_tpdk?si=EFDJNTi2Fjq_oSrn", icon: "fa-youtube", primary: true },
      { label: "View Architecture PNG", url: "assets/img/diocese80/diocese80_architecture.png", icon: "fa-diagram-project" },
      { label: "View Exhibition Kiosk UI", url: "assets/img/diocese80/F1A2CD1A-79C8-4BF4-883C-3A1011799F25_1_201_a.jpeg", icon: "fa-image" }
    ],
    videoEmbed: {
      url: "https://www.youtube.com/embed/IP0l9c_tpdk",
      directUrl: "https://youtube.com/shorts/IP0l9c_tpdk?si=EFDJNTi2Fjq_oSrn",
      title: "Exhibition Kiosk Live Demo: Cantonese & English Narration + AI Docent"
    }
  },
  {
    id: "linkyouin",
    legacyId: "linkyouin-details",
    category: "ai",
    title: "LinkYouIn: AI Recruiter",
    subtitle: "Local-First Intelligent Candidate Screening via Dual LLMs",
    stack: "Python · FastAPI · Ollama · Qwen & Gemma · 2025",
    summary: "Privacy-first automated CV screening pipeline orchestrating dual local LLMs to score candidates in parallel, eliminating bias and protecting sensitive PII.",
    coverImage: "assets/img/Gemini_Generated_Image_tc5wtxtc5wtxtc5w.png",
    meta: {
      client: "Human Resources / Non-Profit Recruitment",
      period: "2025",
      type: "AI Pipeline / Local LLM Orchestration",
      privacy: "100% On-Premises & Private"
    },
    challenge: "Recruiters often spend under 10 seconds evaluating an application. High-volume recruitment produces cognitive fatigue, unconscious bias, and overlooked high-potential talent. Commercial AI recruitment solutions routinely violate compliance requirements by sending unredacted Personally Identifiable Information (PII) to third-party public clouds.",
    solution: "LinkYouIn is an edge-first screening engine operating on local server hardware. It ingests candidate resumes in PDF/DOCX format, extracts text representations, and routes analysis through dual quantized LLMs (Qwen and Gemma) via Ollama. By computing consensus scoring, the system minimizes hallucination risks and subjective model bias.",
    pillars: [
      { title: "Dual-Model Consensus", desc: "Orchestrates two independent quantized LLMs in parallel. Individual ratings are cross-weighted to establish an objective Job Fit metric." },
      { title: "Holistic Assessment", desc: "Beyond superficial keywords, specialized agent logic analyzes career trajectory stability, tenure variance, and compensation alignment." },
      { title: "Zero PII Exposure", desc: "Runs completely locally on offline hardware. No candidate data, names, or addresses ever exit the institutional boundary." },
      { title: "Fault-Tolerant Fallback", desc: "Constructed with thread-pool timeouts: should a primary model encounter resource saturation, the secondary model delivers inference seamlessly." }
    ],
    codeSnippet: `# Orchestrating Parallel LLM Scoring with Ollama
def score_cv(cv_path, job_req, salary):
    cv_text = extract_text(cv_path)
    
    # 1. Parallel Job Fit Scoring (Qwen + Gemma)
    with ThreadPoolExecutor(max_workers=2) as exc:
        job_fit_func = partial(ask_llm_fit, job_req, cv_text)
        results = list(exc.map(job_fit_func, [LLM_MODEL_1, LLM_MODEL_2]))
    
    # 2. Serial Deep Analysis (Career Stability & Interest)
    interest_score = ask_llm_interest(cv_text, job_req, salary)
    
    return {
        "job_fit_score": round((results[0] + results[1]) / 2, 2),
        "interest_score": interest_score
    }`,
    gallery: [
      { src: "assets/img/Gemini_Generated_Image_tc5wtxtc5wtxtc5w.png", caption: "LinkYouIn Multi-Stage Candidate Processing Pipeline" }
    ],
    links: [
      { label: "Watch YouTube Demo", url: "https://youtu.be/YS4tOkJmgzQ?si=AqJ7pT0axqP5z0x_", icon: "fa-youtube", primary: true }
    ]
  },
  {
    id: "sentiment",
    legacyId: "sentiment-details",
    category: "ai",
    title: "Smarter Sentiment Analysis & LLM Fine-Tuning",
    subtitle: "Enterprise Unstructured Feedback Mining with ModernBERT & LoRA",
    stack: "Python · LLM · LoRA · MLX Framework · 2025",
    summary: "Fine-tuning specialized multilingual language models over a decade of training evaluation archives, unlocking actionable institutional intelligence.",
    coverImage: "assets/img/SentiAna/20250812_AI_sharing.png",
    meta: {
      client: "Organization Workforce (4,000+ Staff)",
      period: "2025",
      type: "Applied NLP / Model Adaptation",
      hardware: "Apple Silicon Unified Memory (MPS ~40GB)"
    },
    challenge: "Across an organization of 4,000+ staff, more than a decade of qualitative training reports and evaluation surveys (dating back to 2013) sat dormant in siloed databases. Generic off-the-shelf sentiment APIs failed to parse bilingual Hong Kong Cantonese-English expressions and specialized sector terminology.",
    solution: "Built a customized multilingual sentiment analysis pipeline by adapting ModernBERT and fine-tuning using LoRA (Low-Rank Adaptation) on the Apple MLX framework. Rather than ephemeral prompting, this continuous adaptation permanently encodes the organization's unique vocabulary, nuanced feedback tone, and institutional historical context.",
    pillars: [
      { title: "Bilingual NLP Comprehension", desc: "Trained on combined English and Traditional Chinese evaluation commentary to resolve complex colloquial sentiments." },
      { title: "LoRA Parameter Efficiency", desc: "Frozen foundational base weights with low-rank adapter matrices for rapid retraining without catastrophe forgetting." },
      { title: "Apple Silicon MLX Acceleration", desc: "Harnessed 40GB unified memory architectures on Mac hardware via Metal Performance Shaders (MPS)." },
      { title: "Continuous Knowledge Retention", desc: "Maintains an enduring institutional knowledge bank that improves accuracy with each consecutive evaluation intake." }
    ],
    codeSnippet: `# Model selection for multilingual sentiment
model_name = "clapAI/modernBERT-base-multilingual-sentiment"

# Binary classification fine-tuning
model = AutoModelForSequenceClassification.from_pretrained(
    model_name,
    num_labels=2,               # Binary classification
    id2label=id2label,
    label2id=label2id,
    ignore_mismatched_sizes=True,
)

# Training parameters
training_args = TrainingArguments(
    output_dir='./fine_tuned_model',
    num_train_epochs=3,
    per_device_train_batch_size=8,
    learning_rate=2e-5,
)`,
    gallery: [
      { src: "assets/img/SentiAna/20250812_AI_sharing.png", caption: "LLM Sentiment Classification Architecture & Pipeline" },
      { src: "assets/img/SentiAna/ram.png", caption: "Apple Silicon MLX Unified Memory Utilization during LoRA Training (~40GB RAM)" }
    ],
    links: []
  },
  {
    id: "nuvision",
    legacyId: "nuvision-details",
    category: "vision",
    title: "NuVision: AI Nutrition & Exercise Coach",
    subtitle: "Closing the Digital Health Divide with Vision LLM & HealthKit Integration",
    stack: "LLM · Vision LM · iOS Swift · Android · 2025",
    summary: "AI-powered lifestyle assistant designed for underserved communities living in subdivided flats, balancing photo-based dietary tracking with active energy expenditure.",
    coverImage: "assets/img/nuphoto/small/out4.png",
    meta: {
      client: "Non-Profit Initiative / Underserved Communities",
      period: "2025",
      type: "Vision AI Mobile App",
      status: "Production on App Store & Google Play"
    },
    challenge: "In dense urban environments like Hong Kong, tens of thousands of families reside in subdivided flats lacking kitchen facilities. Heavy dependence on budget takeout meals leads to severe chronic dietary imbalances. Traditional nutrition apps require tedious manual logging and expensive subscriptions out of reach for lower-income households.",
    solution: "NuVision turns any smartphone into an intelligent nutritional guide. Users simply snap a photo of their meal; Vision LMs immediately decompose macronutrients (calories, protein, carbohydrates, fats, fiber). By syncing directly with Apple Health and Android sensors, NuVision visualizes real net calorie equilibrium and delivers localized health coaching without cloud lock-in.",
    pillars: [
      { title: "Zero-Friction Vision Logging", desc: "Single photo snap translates complex mixed-dish Asian cuisine into calibrated nutrient profiles." },
      { title: "Net Caloric Equilibrium", desc: "Harmonizes real-time metabolic burn (active exercise + basal rate) against dietary intake in one unified dashboard." },
      { title: "Strict Offline Encryption", desc: "Health metrics and photographic logs are stored and encrypted locally on-device. Zero telemetry of private health data." },
      { title: "Non-Profit & Ad-Free", desc: "Maintained as a permanent free utility dedicated to democratizing AI benefits for vulnerable groups." }
    ],
    codeSnippet: `// NuVision Vision Inference & HealthKit Sync Flow
func analyzeMealCapture(imageData: Data) async throws -> NutritionReport {
    let preprocessed = try ImageProcessor.normalizeForVisionLM(imageData)
    let nutrition = try await visionClient.inferMacros(preprocessed)
    
    // Correlate with real-time Apple Health active burn
    let dailyBurn = try await HealthKitManager.shared.fetchDailyCaloricExpenditure()
    let netBalance = dailyBurn - nutrition.totalCalories
    
    return NutritionReport(macros: nutrition, netCaloricBalance: netBalance)
}`,
    gallery: [
      { src: "assets/img/nuphoto/output.png", caption: "Integrated Nutrition & Activity Real-Time Balance" },
      { src: "assets/img/nuphoto/output2.png", caption: "AI Vision Food Recognition & Macro Breakdown" },
      { src: "assets/img/nuphoto/output3.png", caption: "Local Device Encryption & Absolute Privacy" },
      { src: "assets/img/nuphoto/output4.png", caption: "Trend Analytics & Longitudinal CSV Export" },
      { src: "assets/img/nuphoto/output5.png", caption: "Community Mission: Equalizing Health in Subdivided Housing" }
    ],
    links: [
      { label: "App Store (v1.5)", url: "https://apps.apple.com/tr/app/nuvision/id6746086162", icon: "fa-apple", primary: true },
      { label: "Google Play Store (v1.2)", url: "https://play.google.com/store/apps/details?id=com.mycrossplatformapp", icon: "fa-google-play" },
      { label: "YouTube Demo", url: "https://youtu.be/4cvz1z18Xy8?si=vFzz6WyID1SacJvQ", icon: "fa-youtube" }
    ]
  },
  {
    id: "imemymine",
    legacyId: "imemymine-details",
    category: "vision",
    title: "IMeMyMine: AI Face Swap App",
    subtitle: "Thematic Identity Transformation & Inclusion Campaign via IP-Adapter",
    stack: "PyTorch · SDXL · IP-Adapter · iOS Swift · 2024",
    summary: "Interactive thematic portrait generator built on fine-tuned IP-Adapter and Stable Diffusion XL, sparking dialogue around social inclusion at major public conventions.",
    coverImage: "assets/img/portfolio/thumbnails/thumbnail_imemymine.jpg",
    meta: {
      client: "Convention Inclusion Campaign",
      period: "2024",
      type: "Generative AI / Mobile Client-Server",
      architecture: "PyTorch Inference Backend + Native iOS"
    },
    challenge: "Engaging convention participants in empathetic conversations regarding social inclusion and diverse identities is traditionally challenging with passive displays. The team sought an immediate, emotionally resonant interactive experience capable of swapping faces into evocative thematic scenarios without rendering artifacts.",
    solution: "Engineered a high-throughput client-server generative AI application. The mobile client captures participant selfies with standard iOS camera hardware, transfers compressed embeddings to a secure GPU server hosting a fine-tuned IP-Adapter on Stable Diffusion XL, and returns personalized high-fidelity portraits within seconds.",
    pillars: [
      { title: "IP-Adapter Decoupled Attention", desc: "Preserves facial geometry and expressive likeness while matching complex lighting, wardrobe, and aesthetic styles." },
      { title: "Optimized Client-Server Relay", desc: "Low-latency networking ensuring rapid queue processing during busy public exhibition floor sessions." },
      { title: "Inclusive Thematic Styling", desc: "Curated diverse archetypes across professions, abilities, and heritage, encouraging participants to see themselves in new perspectives." }
    ],
    codeSnippet: `# IP-Adapter Conditioning Pipeline with PyTorch
image_encoder = CLIPVisionModelWithProjection.from_pretrained(
    "laion/CLIP-ViT-H-14-laion2B-s32B-b79K"
).to(device)

ip_model = IPAdapterXL(
    sd_pipe,
    image_encoder_path=image_encoder,
    ip_ckpt="./models/ip-adapter_sdxl.bin",
    device="cuda"
)

# Generate portrait conditioned on face feature embedding
images = ip_model.generate(
    pil_image=user_face_crop,
    num_samples=1,
    num_inference_steps=30,
    scale=0.7,
    prompt="photorealistic thematic portrait, elegant cinematic studio lighting, 8k"
)`,
    gallery: [
      { src: "assets/img/imemymine.png", caption: "Client-Server Generative Architecture Diagram" },
      { src: "assets/img/im1.png", caption: "Thematic Transformation Sample 01" },
      { src: "assets/img/im2.png", caption: "Thematic Transformation Sample 02" },
      { src: "assets/img/im3.png", caption: "Thematic Transformation Sample 03" },
      { src: "assets/img/im4.png", caption: "Thematic Transformation Sample 04" },
      { src: "assets/img/im5.png", caption: "Thematic Transformation Sample 05" },
      { src: "assets/img/im6.png", caption: "Thematic Transformation Sample 06" }
    ],
    links: [
      { label: "YouTube Demo", url: "https://youtu.be/U5Sx3Rk-iEE?si=l24-UgYKbaMJQn0p", icon: "fa-youtube", primary: true },
      { label: "IP-Adapter GitHub", url: "https://github.com/tencent-ailab/IP-Adapter/tree/main", icon: "fa-github" }
    ]
  },
  {
    id: "airaffle",
    legacyId: "airaffle-details",
    category: "vision",
    title: "AI Raffle: Real-Time Ticket OCR",
    subtitle: "Automating 1,000,000 Annual Ticket Verifications with YOLOv10",
    stack: "YOLOv10 · OpenCV · Python · Roboflow · 2024",
    summary: "Replaced an exhausting manual inspection process for 1 million annual charitable raffle tickets with a 90%+ accurate real-time computer vision detection system.",
    coverImage: "assets/img/airaffle/airaffle_main.jpg",
    meta: {
      client: "Caritas Annual Charity Drive",
      period: "2024",
      scale: "1,000,000+ Printed Tickets Annually",
      accuracy: "> 90% Detection Accuracy"
    },
    challenge: "Caritas prints approximately 1,000,000 charity raffle tickets each year. Statutory government licensing mandates rigorous verification of each ticket's serial number for audit compliance. For decades, a dedicated staff team performed manual eye inspections for weeks on end, diverting vital social service resources to repetitive verification.",
    solution: "Developed an edge-based optical detection workstation pairing YOLOv10 with OpenCV. After annotating 1,000 physical tickets on Roboflow and training models on an RTX 4090 GPU rig, the team achieved >90% precision. The system operates on an everyday MacBook Air utilizing iPhone camera inputs, outputting audit-ready CSV records automatically.",
    pillars: [
      { title: "End-to-End Dataset Lifecycle", desc: "Annotated 1,000+ edge-case tickets across lighting and skew angles to guarantee model resilience." },
      { title: "YOLOv10 Real-Time Inference", desc: "Eliminated Non-Maximum Suppression (NMS) latency for continuous video-stream ticket scanning." },
      { title: "Lightweight Edge Accessibility", desc: "No complex industrial camera required; functions seamlessly on MacBook Air using iPhone Continuity Camera." },
      { title: "Audit Verification Exports", desc: "Automated CSV reconciliation that cross-checks detected series against expected licensing intervals." }
    ],
    codeSnippet: `# Real-Time YOLOv10 Inference Loop
import cv2
from ultralytics import YOLO

model = YOLO("weights/best_yolov10_raffle.pt")
cap = cv2.VideoCapture(1) # iPhone continuity camera input

while cap.isOpened():
    success, frame = cap.read()
    if not success: break
    
    results = model.predict(frame, conf=0.75, stream=True)
    for result in results:
        boxes = result.boxes
        for box in boxes:
            serial_text = decode_serial(box.xyxy[0], frame)
            record_to_audit_csv(serial_text)
            
    cv2.imshow("AI Raffle Real-Time Scanner", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'): break`,
    gallery: [
      { src: "assets/img/airaffle/Roboscreenshot.png", caption: "Roboflow Multi-Class Dataset Annotation & Augmentation" },
      { src: "assets/img/airaffle/jupyter.png", caption: "YOLOv10 RTX 4090 Training & Hyperparameter Tuning" },
      { src: "assets/img/airaffle/results.png", caption: "Loss Curves & F1-Score Metric Validation (>90% Accuracy)" },
      { src: "assets/img/airaffle/airaffle_main.jpg", caption: "Real-Time Video Camera Inference Scanner" },
      { src: "assets/img/airaffle/csvfile.png", caption: "Generated Verification & Government Audit CSV Output" }
    ],
    links: [
      { label: "YouTube Demo", url: "https://www.youtube.com/watch?v=z1p9N5ivJO8&list=PLapYgavEwJHApfBsrHKFdoraWmGXGC7Mg&index", icon: "fa-youtube", primary: true }
    ]
  },
  {
    id: "passsecure",
    legacyId: "passsecure-details",
    category: "mobile",
    title: "Pass Secure: iOS Vault",
    subtitle: "Biometric Keyring with SwiftData & Private CloudKit Sync",
    stack: "SwiftData · CloudKit · iOS Swift · SwiftUI · 2024",
    summary: "Native Apple password management vault leveraging modern SwiftData persistence and encrypted private iCloudKit synchronization.",
    coverImage: "assets/img/portfolio/thumbnails/thumbnail_passSecure.jpg",
    meta: {
      platform: "iOS 17+ (iPhone & iPad)",
      period: "2024",
      type: "Cryptographic Mobile App",
      status: "Available on App Store"
    },
    challenge: "Many users are hesitant to entrust their master credentials to centralized commercial password managers vulnerable to massive cloud credential leaks. A lightweight, strictly zero-knowledge personal manager was required that offers seamless multi-device Apple synchronization without third-party servers.",
    solution: "Pass Secure uses Apple's native SwiftData framework combined with private CloudKit databases. All credential records are guarded by Face ID/Touch ID biometrics, with automated 5-minute inactivity lockouts, full-text encrypted search, and support for encrypted PDF and CSV backups.",
    pillars: [
      { title: "SwiftData + Private CloudKit", desc: "Zero third-party intermediary servers. Data syncs only through the user's private encrypted Apple ID container." },
      { title: "Local Biometrics Guard", desc: "Biometric LocalAuthentication gates access on startup and resumes from background." },
      { title: "Automated Session Teardown", desc: "Enforces 5-minute strict timeout to protect unattended devices in public spaces." },
      { title: "Encrypted Export Options", desc: "Exports encrypted password records or structured plaintext CSV for audit migration." }
    ],
    codeSnippet: `// Biometric Authentication & Inactivity Policy
final class SecurityManager: ObservableObject {
    @Published var isUnlocked: Bool = false
    private var lastActiveTimestamp: Date = Date()
    private let timeoutInterval: TimeInterval = 300 // 5 Minutes
    
    func authenticateWithBiometrics() async -> Bool {
        let context = LAContext()
        var error: NSError?
        guard context.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: &error) else {
            return false
        }
        
        do {
            let success = try await context.evaluatePolicy(
                .deviceOwnerAuthenticationWithBiometrics,
                localizedReason: "Unlock your Pass Secure vault"
            )
            DispatchQueue.main.async { self.isUnlocked = success }
            return success
        } catch {
            return false
        }
    }
}`,
    gallery: [
      { src: "assets/img/ps1.png", caption: "Vault Credential Dashboard with Quick Copy" },
      { src: "assets/img/ps3.png", caption: "Detailed Account Inspector with Biometric Gate" },
      { src: "assets/img/ps4.png", caption: "Encrypted Backup & Synchronization Settings" }
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/hk/app/pass-secure-password-manager/id6479182542", icon: "fa-apple", primary: true },
      { label: "GitHub Repository", url: "https://github.com/orpheuslau/Pass-Secure/tree/main", icon: "fa-github" }
    ]
  },
  {
    id: "smis",
    legacyId: "smis-details",
    category: "fullstack",
    title: "Student Management Information System",
    subtitle: "Full-Stack Educational Assessment & Analytics Portal",
    stack: "React.js · Node.js · Express · MongoDB · JWT · 2024",
    summary: "Production academic record management suite with role-based access control, real-time assessment tracking, and automated PDF/Excel grade report generators.",
    coverImage: "assets/img/portfolio/thumbnails/1.jpg",
    meta: {
      type: "Full-Stack Enterprise Web Application",
      period: "2024",
      database: "MongoDB with Mongoose Schemas",
      security: "JWT Authentication & Role-Based Permissions"
    },
    challenge: "Educational instructors and social welfare educators frequently juggle manual spreadsheets to track student achievements, special educational needs, and cohort evaluations, leading to lost records, formatting inconsistency, and security breaches.",
    solution: "Architected SMIS from the ground up as a modern SPA on React.js, paired with a resilient Node/Express API and MongoDB. Implemented granular administrator role privileges, assessment progress dashboards, and single-click compilation into official PDF/Excel report archives.",
    pillars: [
      { title: "Full Student & Assessment Lifecycle", desc: "Complete CRUD workflows for student profiles, demographic milestones, and multidimensional assessments." },
      { title: "Visual Progress Dashboards", desc: "Interactive performance charting giving teachers immediate feedback on student cohort development." },
      { title: "Automated Report Compilers", desc: "Dynamically generates individualized student assessment PDFs for parent meetings and consolidated Excel records." },
      { title: "Granular RBAC Security", desc: "Strict separation between administrative privilege configurations and regular teacher data access." }
    ],
    codeSnippet: `// Secure Assessment Generation Route with JWT
router.post('/assessments/generate-report/:studentId', verifyToken, async (req, res) => {
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId).populate('assessments');
        if (!student) return res.status(404).json({ message: "Student record not found" });
        
        const doc = new PDFDocument({ margin: 40 });
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', \`attachment; filename=\${student.studentId}_Report.pdf\`);
        
        doc.pipe(res);
        buildStudentReportTemplate(doc, student);
        doc.end();
    } catch (err) {
        res.status(500).json({ error: "Failed to compile assessment PDF" });
    }
});`,
    gallery: [
      { src: "assets/img/smis.png", caption: "SMIS Full-Stack System Architecture" },
      { src: "assets/img/1.png", caption: "Student Profile CRUD Workspace" },
      { src: "assets/img/2.png", caption: "Multidimensional Assessment Form Editor" },
      { src: "assets/img/3.png", caption: "Export to Official PDF & Excel Sheet Generators" },
      { src: "assets/img/4.png", caption: "Cohort Assessment Data Visualization Dashboard" },
      { src: "assets/img/5.png", caption: "Fast Multi-Parameter Filter & Search" },
      { src: "assets/img/6.png", caption: "Administrative User Privileges & Access Control" }
    ],
    links: [
      { label: "Live Demo Portal", url: "http://front.orpheuslau.dev/", icon: "fa-arrow-up-right-from-square", primary: true },
      { label: "Frontend GitHub Repo", url: "https://github.com/orpheuslau/ReactJSfrontend", icon: "fa-github" }
    ]
  },
  {
    id: "caritasar",
    legacyId: "caritasar-details",
    category: "fullstack",
    title: "Caritas Gallery AR",
    subtitle: "Augmented Reality Event Keepsake App for 70th Anniversary",
    stack: "iOS ARKit · Swift · SceneKit · 2023",
    summary: "Public-facing AR mobile app allowing hundreds of event attendees to anchor and interact with 3D anniversary emblems in real-world photography.",
    coverImage: "assets/img/portfolio/thumbnails/2.jpg",
    meta: {
      client: "Caritas 70th Anniversary Jubilee",
      period: "2023",
      technology: "ARKit / SceneKit / iOS",
      status: "Published on App Store"
    },
    challenge: "To celebrate Caritas Hong Kong's 70th anniversary, the organization required an engaging digital element for celebratory galas and community exhibitions that would unite multi-generational visitors across physical venues.",
    solution: "Designed and published Caritas Gallery AR on the iOS App Store. Built with ARKit, the app projects calibrated 3D anniversary badges and animated motifs into real camera space. Users can adjust orientation, capture commemorative photographs, and share immediately to social channels.",
    pillars: [
      { title: "Real-Time Surface & Plane Anchoring", desc: "Accurate spatial positioning of 3D celebration emblems in variable indoor and outdoor lighting." },
      { title: "Direct Camera Integration", desc: "High-resolution photo capture engine with custom watermarking and instantaneous camera roll export." },
      { title: "Viral Social Engagement", desc: "Integrated social sharing flows driving anniversary awareness across Instagram and media feeds." }
    ],
    codeSnippet: `// ARKit Emblem Placement Node Configuration
func setupEmblemNode(at transform: simd_float4x4) -> SCNNode {
    guard let emblemScene = SCNScene(named: "art.scnassets/caritas_70_logo.scn") else {
        return SCNNode()
    }
    let node = emblemScene.rootNode.clone()
    node.simdTransform = transform
    
    // Smooth continuous celebration rotation
    let rotationAction = SCNAction.rotateBy(x: 0, y: CGFloat.pi * 2, z: 0, duration: 12.0)
    node.runAction(SCNAction.repeatForever(rotationAction))
    return node
}`,
    gallery: [
      { src: "assets/img/ar1 (5).jpg", caption: "Commemorative AR Landmark Photo Capture" },
      { src: "assets/img/ar1 (3).jpg", caption: "Interactive 3D Emblem Viewfinder Overlay" },
      { src: "assets/img/ar1.jpg", caption: "Community Gala Visitor Interactive Showcase 01" },
      { src: "assets/img/ar1 (7).jpg", caption: "Community Gala Visitor Interactive Showcase 02" },
      { src: "assets/img/ar1 (8).jpg", caption: "Community Gala Visitor Interactive Showcase 03" }
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/tr/app/caritas-gallery-ar/id6449176352", icon: "fa-apple", primary: true },
      { label: "Instagram Archive", url: "https://www.instagram.com/caritas70gallery/", icon: "fa-instagram" },
      { label: "YouTube Demo", url: "https://www.youtube.com/watch?v=UA6KdNF0PyE", icon: "fa-youtube" },
      { label: "GitHub Repository", url: "https://github.com/orpheuslau/CaritasGallery_Final", icon: "fa-github" }
    ]
  },
  {
    id: "jquery",
    legacyId: "jquery-details",
    category: "fullstack",
    title: "Rental Apartments Finder",
    subtitle: "Cross-Platform Property Registry & Offline Database Engine",
    stack: "jQuery · Apache Cordova · Java Android · Web SQL · 2021",
    summary: "Hybrid and native Android application with local relational persistence, duplicate detection, and rich media property notes for housing assistance officers.",
    coverImage: "assets/img/portfolio/thumbnails/3.jpg",
    meta: {
      type: "Mobile Housing Records Tool",
      period: "2021",
      storage: "Local Web SQL & SQLite Embedded DB",
      docs: "Complete IEEE Software Spec PDF Available"
    },
    challenge: "Social workers assisting low-income clients in finding affordable housing frequently visit remote districts with unreliable cell coverage. They needed an offline mobile utility to document unit dimensions, rent terms, landlord contact info, and site photos.",
    solution: "Built a dual-architecture housing inspector app (Cordova/jQuery and native Java). Incorporates strict form verification, offline Web SQL relational tables, duplicate address validation, and direct photo/video attachments with software specification documentation.",
    pillars: [
      { title: "Offline Web SQL / SQLite Engine", desc: "Stores listings and field notes completely on-device without needing internet connectivity in basements." },
      { title: "Duplicate Detection Heuristics", desc: "Prevents accidental double-entries across multiple field inspectors visiting the same building." },
      { title: "Media Attachments & Verification", desc: "Embeds photos and YouTube reference walkthroughs directly into property record dossiers." }
    ],
    codeSnippet: `// Web SQL Transaction for Offline Listing Storage
function insertRentalListing(propertyData, successCallback, errorCallback) {
    db.transaction(function(tx) {
        tx.executeSql(
            'INSERT INTO listings (property_type, bedrooms, rent_amount, address, notes, created_at) VALUES (?, ?, ?, ?, ?, ?)',
            [propertyData.type, propertyData.bedrooms, propertyData.rent, propertyData.address, propertyData.notes, new Date().toISOString()],
            function(tx, results) { successCallback(results.insertId); },
            function(tx, error) { errorCallback(error.message); }
        );
    });
}`,
    gallery: [
      { src: "assets/img/portfolio/thumbnails/3.jpg", caption: "Rental Apartments Finder App Interface" },
      { src: "assets/img/j11.png", caption: "Property Search & Filtering Screen" },
      { src: "assets/img/j14.png", caption: "Form Validation & New Listing Entry" }
    ],
    links: [
      { label: "Download Software Spec PDF", url: "assets/JqueryJAVAReport.pdf", icon: "fa-file-pdf", primary: true },
      { label: "GitHub Repository", url: "https://github.com/orpheuslau/Jquery_rentalApp", icon: "fa-github" }
    ]
  }
];

// Current State
let currentActiveProject = null;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProjectCards('all');
  initFilterTabs();
  initCaseStudyModal();
  initLightbox();
  initBackToTop();
  initYear();
  handleUrlHash();
});

// Navbar Behavior
function initNavbar() {
  const mainNav = document.getElementById('mainNav');
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      mainNav.classList.add('bg-zinc-950/90', 'backdrop-blur-md', 'border-b', 'border-zinc-800/80', 'shadow-2xl');
      mainNav.classList.remove('bg-transparent', 'border-transparent');
    } else {
      mainNav.classList.remove('bg-zinc-950/90', 'border-zinc-800/80', 'shadow-2xl');
      mainNav.classList.add('bg-transparent', 'border-transparent');
    }
  });

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const isExpanded = !mobileMenu.classList.contains('hidden');
      navToggle.setAttribute('aria-expanded', isExpanded);
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.className = isExpanded ? 'fas fa-xmark text-lg' : 'fas fa-bars text-lg';
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        navToggle.setAttribute('aria-expanded', 'false');
        const icon = navToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars text-lg';
      });
    });
  }
}

// Filter Tabs
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      
      filterBtns.forEach(b => {
        b.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm');
        b.classList.add('text-zinc-400', 'hover:text-zinc-200');
      });
      btn.classList.add('bg-zinc-800', 'text-white', 'shadow-sm');
      btn.classList.remove('text-zinc-400', 'hover:text-zinc-200');
      
      renderProjectCards(category);
    });
  });
}

// Render Project Cards
function renderProjectCards(category = 'all') {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  const filtered = category === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === category);

  container.innerHTML = filtered.map((project, idx) => {
    const formattedIdx = String(idx + 1).padStart(2, '0');
    return `
      <article 
        class="group glass-card rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer focus-within:ring-2 focus-within:ring-orange-500/50"
        onclick="openCaseStudy('${project.id}')"
        tabindex="0"
        role="button"
        aria-label="Open case study for ${project.title}"
        onkeydown="if(event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openCaseStudy('${project.id}'); }"
      >
        <div>
          <!-- Visual Media Container -->
          <div class="relative aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-zinc-800/60">
            <img 
              src="${project.coverImage}" 
              alt="${project.title} Preview"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/800x500/18181b/a1a1aa?text=${encodeURIComponent(project.title)}';"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
            
            <!-- Index & Category Text -->
            <div class="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span class="tracking-widest">${formattedIdx} // PROJECT</span>
              <span class="uppercase tracking-wider text-orange-400 font-sans font-medium">${project.category}</span>
            </div>

            <!-- View Trigger Overlay -->
            <div class="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span class="inline-flex items-center gap-2 text-xs font-medium bg-zinc-900/90 text-white px-3 py-1.5 rounded-full border border-zinc-700/80 shadow-lg">
                Explore Case Study <i class="fas fa-arrow-right text-[10px] text-orange-400"></i>
              </span>
            </div>
          </div>

          <!-- Content Body -->
          <div class="p-6 md:p-7">
            <!-- Unboxed Metadata (Anti-slop compliant) -->
            <div class="text-xs text-zinc-400 mb-2.5 font-mono">
              ${project.stack}
            </div>

            <h3 class="text-xl font-semibold text-zinc-100 group-hover:text-orange-400 transition-colors tracking-tight mb-2">
              ${project.title}
            </h3>

            <p class="text-sm text-zinc-400 leading-relaxed line-clamp-3">
              ${project.summary}
            </p>
          </div>
        </div>

        <!-- Footer Call-out -->
        <div class="px-6 md:px-7 pb-6 pt-2 border-t border-zinc-800/40 flex items-center justify-between text-xs text-zinc-400">
          <span class="group-hover:text-zinc-200 transition-colors">Architecture &amp; Metrics</span>
          <span class="text-orange-400 font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Details <i class="fas fa-chevron-right text-[10px]"></i>
          </span>
        </div>
      </article>
    `;
  }).join('');
}

// Open Case Study Modal
function openCaseStudy(projectId) {
  const project = PROJECTS.find(p => p.id === projectId || p.legacyId === projectId);
  if (!project) return;

  currentActiveProject = project;
  const modal = document.getElementById('caseStudyModal');
  const content = document.getElementById('caseStudyContent');
  if (!modal || !content) return;

  // Build Rich Content View
  content.innerHTML = `
    <!-- Modal Header -->
    <div class="sticky top-0 z-30 bg-zinc-950/90 backdrop-blur-md px-6 sm:px-10 py-5 border-b border-zinc-800/80 flex items-center justify-between gap-4">
      <div>
        <div class="text-xs font-mono text-orange-400 uppercase tracking-wider mb-1">
          Case Study · ${project.category}
        </div>
        <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">
          ${project.title}
        </h2>
      </div>

      <div class="flex items-center gap-3">
        <!-- Close button -->
        <button 
          onclick="closeCaseStudy()" 
          class="p-2.5 rounded-full text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="Close modal"
        >
          <i class="fas fa-xmark text-lg"></i>
        </button>
      </div>
    </div>

    <!-- Modal Body Scrollable Area -->
    <div class="px-6 sm:px-10 py-8 space-y-12">
      <!-- Hero Banner & Subtitle -->
      <div>
        <p class="text-lg sm:text-xl text-zinc-200 font-serif-display italic mb-6 leading-relaxed">
          "${project.subtitle}"
        </p>

        <!-- Unboxed Metadata Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs">
          <div>
            <div class="text-zinc-500 font-mono mb-1">PERIOD</div>
            <div class="font-medium text-zinc-200">${project.meta.period || '2024–2025'}</div>
          </div>
          <div>
            <div class="text-zinc-500 font-mono mb-1">DOMAIN / TYPE</div>
            <div class="font-medium text-zinc-200">${project.meta.type || 'Engineering'}</div>
          </div>
          <div>
            <div class="text-zinc-500 font-mono mb-1">SCOPE / SCALE</div>
            <div class="font-medium text-zinc-200">${project.meta.scale || project.meta.client || 'Enterprise'}</div>
          </div>
          <div>
            <div class="text-zinc-500 font-mono mb-1">COMPLIANCE</div>
            <div class="font-medium text-orange-400">${project.meta.privacy || project.meta.status || 'Verified'}</div>
          </div>
        </div>
      </div>

      <!-- Action Buttons Row (Top) -->
      ${renderProjectLinks(project.links)}

      <!-- Featured System Architecture Graphic / Diagram Banner -->
      ${project.featuredDiagram ? `
        <div class="rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d0f14] p-3 sm:p-5 group">
          <div class="flex items-center justify-between pb-3 text-xs text-zinc-400">
            <span class="font-mono text-orange-400 font-medium flex items-center gap-2">
              <i class="fas fa-diagram-project"></i>
              <span>SYSTEM ARCHITECTURE DIAGRAM</span>
            </span>
          </div>
          <div 
            class="relative overflow-hidden rounded-xl bg-white border border-zinc-700/80 cursor-pointer shadow-xl"
            onclick="openLightbox('${project.featuredDiagram.src}', '${escapeHtml(project.featuredDiagram.caption)}', '${project.id}')"
            title="Click to zoom in full resolution"
          >
            <img 
              src="${project.featuredDiagram.src}" 
              alt="${escapeHtml(project.featuredDiagram.caption)}" 
              class="w-full h-auto max-h-[580px] object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
            />
            <div class="absolute bottom-3 right-3 flex items-center gap-2 bg-zinc-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-zinc-700/80 text-[11px] text-zinc-200 shadow-xl">
              <i class="fas fa-magnifying-glass-plus text-orange-400"></i>
              <span>Enlarge Full Resolution</span>
            </div>
          </div>
          <p class="pt-3 text-xs font-mono text-zinc-300 leading-relaxed text-center sm:text-left">
            ${project.featuredDiagram.caption}
          </p>
        </div>
      ` : ''}

      <!-- Challenge & Solution Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
          <h3 class="text-base font-semibold text-zinc-100 flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-red-400"></span>
            The Challenge
          </h3>
          <p class="text-sm text-zinc-300 leading-relaxed">
            ${project.challenge}
          </p>
        </div>

        <div class="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
          <h3 class="text-base font-semibold text-zinc-100 flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            Architectural Solution
          </h3>
          <p class="text-sm text-zinc-300 leading-relaxed">
            ${project.solution}
          </p>
        </div>
      </div>

      <!-- Architectural Pillars Grid -->
      <div>
        <h3 class="text-lg font-semibold text-zinc-100 tracking-tight mb-4">
          Core Technical Pillars & Capabilities
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${project.pillars.map(p => `
            <div class="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700 transition-colors">
              <h4 class="text-sm font-semibold text-orange-400 mb-1.5">${p.title}</h4>
              <p class="text-xs text-zinc-400 leading-relaxed">${p.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Code Highlight / Logic -->
      ${project.codeSnippet ? `
        <div>
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-semibold text-zinc-100 tracking-tight">
              Production Logic & Code Snippet
            </h3>
            <button 
              onclick="copyCodeSnippet(this)" 
              class="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 px-3 py-1.5 rounded-lg border border-zinc-700/60 transition-colors"
            >
              <i class="fas fa-copy"></i> <span>Copy Code</span>
            </button>
          </div>
          <div class="relative rounded-xl overflow-hidden border border-zinc-800 bg-[#0d0f12]">
            <div class="px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800/80 flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span class="w-3 h-3 rounded-full bg-zinc-700 inline-block"></span>
              <span>implementation_core.py</span>
            </div>
            <pre class="p-5 overflow-x-auto text-xs font-mono text-emerald-400/90 leading-relaxed"><code>${escapeHtml(project.codeSnippet)}</code></pre>
          </div>
        </div>
      ` : ''}

      <!-- Gallery / Architecture Diagrams -->
      ${project.gallery && project.gallery.length ? `
        <div>
          <h3 class="text-lg font-semibold text-zinc-100 tracking-tight mb-4">
            System Diagrams & Visual Evidence
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            ${project.gallery.map(img => `
              <div class="group relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 cursor-pointer" onclick="openLightbox('${img.src}', '${escapeHtml(img.caption)}', '${project.id}')">
                <img 
                  src="${img.src}" 
                  alt="${img.caption}" 
                  class="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onerror="this.onerror=null;this.src='https://placehold.co/800x450/18181b/a1a1aa?text=Diagram';"
                />
                <div class="p-3 bg-zinc-900/90 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                  <span class="truncate pr-2">${img.caption}</span>
                  <span class="text-orange-400 group-hover:text-orange-300 shrink-0"><i class="fas fa-magnifying-glass-plus"></i></span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Live Video Demonstration -->
      ${project.videoEmbed ? `
        <div class="rounded-2xl border border-zinc-800 bg-[#0d0f14] p-5 sm:p-7 shadow-xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h3 class="text-base sm:text-lg font-semibold text-zinc-100 tracking-tight flex items-center gap-2.5">
              <i class="fab fa-youtube text-red-500 text-xl"></i>
              <span>Live Demonstration & Multi-Lingual Narration</span>
            </h3>
            <a 
              href="${project.videoEmbed.directUrl || project.videoEmbed.url}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-mono tracking-wide"
            >
              <span>Watch on YouTube</span>
              <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
          <div class="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 bg-black aspect-[9/16]">
            <iframe 
              src="${project.videoEmbed.url}" 
              title="${escapeHtml(project.videoEmbed.title || 'Project Demonstration')}"
              class="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
          </div>
          <p class="mt-4 text-xs font-mono text-zinc-400 text-center max-w-lg mx-auto leading-relaxed">
            ${escapeHtml(project.videoEmbed.title || 'Live exhibition kiosk demo showing Cantonese and English audio narration plus interactive AI docent dialogue.')}
          </p>
        </div>
      ` : ''}

      <!-- Project Navigation Bar (Prev / Next) -->
      <div class="pt-8 border-t border-zinc-800/80 flex items-center justify-between gap-4">
        ${getPrevNextButtons(project.id)}
      </div>
    </div>
  `;

  // Show modal
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  
  // Update URL hash smoothly without jump
  history.replaceState(null, null, `#${project.id}`);
}

function getPrevNextButtons(currentId) {
  const idx = PROJECTS.findIndex(p => p.id === currentId);
  const prevProject = idx > 0 ? PROJECTS[idx - 1] : null;
  const nextProject = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  return `
    <div>
      ${prevProject ? `
        <button 
          onclick="openCaseStudy('${prevProject.id}')"
          class="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2.5 rounded-lg border border-zinc-800 transition-colors"
        >
          <i class="fas fa-arrow-left"></i>
          <span class="hidden sm:inline">Previous:</span> ${prevProject.title.split(':')[0]}
        </button>
      ` : '<span class="text-xs text-zinc-600">First Project</span>'}
    </div>
    <div>
      ${nextProject ? `
        <button 
          onclick="openCaseStudy('${nextProject.id}')"
          class="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2.5 rounded-lg border border-zinc-800 transition-colors"
        >
          <span class="hidden sm:inline">Next:</span> ${nextProject.title.split(':')[0]}
          <i class="fas fa-arrow-right"></i>
        </button>
      ` : '<span class="text-xs text-zinc-600">End of Selected Works</span>'}
    </div>
  `;
}

function renderProjectLinks(links) {
  if (!links || !links.length) return '';
  const brandIcons = ['fa-youtube', 'fa-github', 'fa-apple', 'fa-google', 'fa-google-play', 'fa-instagram'];
  return `
    <div class="flex flex-wrap items-center gap-3">
      ${links.map(link => {
        const isBrand = link.icon && brandIcons.includes(link.icon);
        const iconPrefix = isBrand ? 'fab' : 'fas';
        const isYoutube = link.icon === 'fa-youtube';
        return `
        <a 
          href="${link.url}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
            link.primary 
              ? (isYoutube 
                  ? 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/30' 
                  : 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-900/30')
              : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/60'
          }"
        >
          <i class="${iconPrefix} ${link.icon || 'fa-arrow-up-right-from-square'} ${isYoutube && !link.primary ? 'text-red-500' : ''}"></i>
          <span>${link.label}</span>
          <i class="fas fa-arrow-up-right-from-square text-[10px] opacity-70"></i>
        </a>
      `;}).join('')}
    </div>
  `;
}

function closeCaseStudy() {
  const modal = document.getElementById('caseStudyModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    // Reset hash without scrolling
    if (window.location.hash.startsWith('#') && window.location.hash.length > 1) {
      history.replaceState(null, null, '#works');
    }
  }
}

// Multi-Image Project Lightbox Gallery
let currentLightboxGallery = [];
let currentLightboxIndex = 0;

function getProjectGalleryImages(project) {
  if (!project) return [];
  const list = [];
  const seen = new Set();

  // 1. Featured Diagram (if present)
  if (project.featuredDiagram && project.featuredDiagram.src) {
    list.push({
      src: project.featuredDiagram.src,
      caption: project.featuredDiagram.caption || `${project.title} - Architecture Diagram`,
      projectTitle: project.title
    });
    seen.add(project.featuredDiagram.src);
  }

  // 2. All Gallery Images
  if (project.gallery && Array.isArray(project.gallery)) {
    project.gallery.forEach(img => {
      if (img.src && !seen.has(img.src)) {
        list.push({
          src: img.src,
          caption: img.caption || '',
          projectTitle: project.title
        });
        seen.add(img.src);
      }
    });
  }

  // 3. Fallback: Cover Image
  if (list.length === 0 && project.coverImage) {
    list.push({
      src: project.coverImage,
      caption: project.title,
      projectTitle: project.title
    });
  }

  return list;
}

function openLightbox(src, caption, projectId) {
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox) return;

  // Determine target project
  let targetProject = null;
  if (projectId) {
    targetProject = PROJECTS.find(p => p.id === projectId || p.legacyId === projectId);
  }
  if (!targetProject && currentActiveProject) {
    targetProject = currentActiveProject;
  }

  // Populate gallery items for this project
  if (targetProject) {
    currentLightboxGallery = getProjectGalleryImages(targetProject);
  } else {
    currentLightboxGallery = [{ src, caption: caption || '', projectTitle: '' }];
  }

  // Find index of clicked image
  let foundIndex = currentLightboxGallery.findIndex(item => item.src === src);
  if (foundIndex === -1) {
    currentLightboxGallery.unshift({
      src,
      caption: caption || '',
      projectTitle: targetProject ? targetProject.title : ''
    });
    foundIndex = 0;
  }

  currentLightboxIndex = foundIndex;
  renderLightboxImage();
  lightbox.classList.remove('hidden');
}

function renderLightboxImage() {
  const item = currentLightboxGallery[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightboxImage');
  const cap = document.getElementById('lightboxCaption');
  const counter = document.getElementById('lightboxCounter');
  const titleBadge = document.getElementById('lightboxProjectTitle');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (img) {
    img.src = item.src;
    img.alt = item.caption || 'Enlarged project visual';
  }
  if (cap) {
    cap.textContent = item.caption || '';
  }

  const total = currentLightboxGallery.length;
  if (counter) {
    if (total > 1) {
      counter.textContent = `${currentLightboxIndex + 1} / ${total}`;
      counter.classList.remove('hidden');
    } else {
      counter.classList.add('hidden');
    }
  }

  if (titleBadge) {
    if (item.projectTitle) {
      titleBadge.textContent = item.projectTitle;
      titleBadge.classList.remove('hidden');
    } else {
      titleBadge.classList.add('hidden');
    }
  }

  // Display or hide navigation arrows based on count
  if (prevBtn && nextBtn) {
    if (total > 1) {
      prevBtn.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
    } else {
      prevBtn.classList.add('hidden');
      nextBtn.classList.add('hidden');
    }
  }
}

function nextLightboxImage() {
  if (currentLightboxGallery.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxGallery.length;
  renderLightboxImage();
}

function prevLightboxImage() {
  if (currentLightboxGallery.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxGallery.length) % currentLightboxGallery.length;
  renderLightboxImage();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (lightbox) {
    lightbox.classList.add('hidden');
  }
}

// Lightbox Initialization
function initLightbox() {
  const lightbox = document.getElementById('lightboxModal');
  if (!lightbox) return;

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.closest('#lightboxCloseBtn')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'ArrowRight') {
        nextLightboxImage();
      } else if (e.key === 'ArrowLeft') {
        prevLightboxImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
      return;
    }

    if (e.key === 'Escape') {
      closeCaseStudy();
    }
  });

  // Mobile Touch Swipe Navigation
  let touchStartX = 0;
  let touchEndX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchStartX = e.changedTouches[0].screenX;
    }
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          nextLightboxImage(); // Swiped left
        } else {
          prevLightboxImage(); // Swiped right
        }
      }
    }
  }, { passive: true });
}

// Expose globals for onclick attributes
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextLightboxImage = nextLightboxImage;
window.prevLightboxImage = prevLightboxImage;

function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCaseStudy();
    }
  });
}

// Handle Direct Hash Linking
function handleUrlHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) return;

  // Check if hash matches any project
  const matched = PROJECTS.find(p => p.id === hash || p.legacyId === hash);
  if (matched) {
    setTimeout(() => {
      openCaseStudy(matched.id);
    }, 200);
  }
}

// Back to Top
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'pointer-events-auto');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Footer Year
function initYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Utility: Copy code
function copyCodeSnippet(btn) {
  const pre = btn.closest('div').parentElement.querySelector('pre');
  if (!pre) return;
  
  navigator.clipboard.writeText(pre.innerText).then(() => {
    const span = btn.querySelector('span');
    const originalText = span.textContent;
    span.textContent = 'Copied!';
    btn.classList.add('text-emerald-400');
    setTimeout(() => {
      span.textContent = originalText;
      btn.classList.remove('text-emerald-400');
    }, 2000);
  });
}

// Utility: Copy email
function copyEmailAddress() {
  navigator.clipboard.writeText('orpheuslau@gmail.com').then(() => {
    const notice = document.getElementById('copyNotice');
    if (notice) {
      notice.classList.remove('opacity-0');
      notice.classList.add('opacity-100');
      setTimeout(() => {
        notice.classList.remove('opacity-100');
        notice.classList.add('opacity-0');
      }, 2500);
    }
  });
}

function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}

// Search Filter for Repository Archive Table
function filterArchiveTable(query) {
  const q = query.toLowerCase();
  const rows = document.querySelectorAll('#archiveTableBody tr');
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(q) ? '' : 'none';
  });
}

// In-app architecture diagram / image upload helper
window.triggerDiagramUpload = function(projectId, targetPath) {
  let input = document.getElementById('diagramUploadInput');
  if (!input) {
    input = document.createElement('input');
    input.id = 'diagramUploadInput';
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    document.body.appendChild(input);
  }
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const cleanPath = targetPath.split('?')[0];
      const res = await fetch(`/api/upload?path=${encodeURIComponent(cleanPath)}`, {
        method: 'POST',
        headers: { 'Content-Type': file.type || 'application/octet-stream' },
        body: file
      });
      if (res.ok) {
        const t = Date.now();
        document.querySelectorAll(`img[src^="${cleanPath}"]`).forEach(img => {
          img.src = `${cleanPath}?t=${t}`;
        });
        alert('Image successfully replaced with ' + file.name + '!');
      } else {
        alert('Upload failed: ' + (await res.text()));
      }
    } catch (err) {
      alert('Upload error: ' + err.message);
    }
  };
  input.click();
};

