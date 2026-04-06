export const supportedLocales = ["en", "zh", "ja", "ko"];
export const defaultLocale = "en";

export const navItems = [
  { slug: "", key: "home" },
  { slug: "product", key: "product" },
  { slug: "use-cases", key: "useCases" },
  { slug: "how-it-works", key: "howItWorks" },
  { slug: "faq", key: "faq" },
  { slug: "request-demo", key: "requestDemo" },
];

export const translations = {
  en: {
    brand: "Fiber Link",
    nav: {
      home: "Home",
      product: "Product",
      useCases: "Use Cases",
      howItWorks: "How It Works",
      faq: "FAQ",
      requestDemo: "Request Demo",
      source: "Source",
    },
    labels: {
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      system: "System",
      locale: "Language",
      comingSoon: "Coming soon",
      requestDemoTitle: "Request Demo",
    },
    hero: {
      eyebrow: "Community monetization, made simple",
      title: "Tipping and creator payouts for online communities.",
      description:
        "Fiber Link turns member attention into sustainable earnings through instant tipping and low-friction micropayments.",
      primary: "Request Demo",
      secondary: "View features",
      highlights: [
        "Built for community operators",
        "Creator-first earnings model",
        "Instant, low-fee payments",
      ],
      cardTitle: "What Fiber Link makes possible",
      cards: [
        "Members reward creators in one click.",
        "Admins onboard monetization without app-wide wallet changes.",
        "Creators view real earnings in a single, readable ledger.",
        "Community growth and contribution loops are reinforced naturally.",
      ],
    },
    product: {
      eyebrow: "The product",
      title: "A payment layer for communities, not a power-user wallet.",
      intro:
        "Install Fiber Link as a hosted service in your community stack and activate sustainable creator economics fast.",
      cards: [
        {
          title: "For admins",
          description:
            "Set rules, configure payouts, and scale monetization without onboarding every user to cryptographic setup.",
        },
        {
          title: "For creators",
          description:
            "Receive ongoing support from your members and track earnings across posts, discussions, and streams.",
        },
        {
          title: "For members",
          description:
            "Tip your favorite contributors in tiny payments without leaving the community context.",
        },
      ],
      visualTitle: "Creator economy dashboard",
      visualCaption:
        "A lightweight, operator-friendly view for tracking rewards and payout readiness.",
    },
    useCases: {
      eyebrow: "Use cases",
      title: "Where communities reward contribution daily.",
      description:
        "From creator collectives to technical forums, Fiber Link turns recurring support behavior into measurable creator income.",
      cases: [
        {
          title: "Creator communities",
          description: "Reward explainers, answerers, and artists as they publish value for your core audience.",
        },
        {
          title: "Developer forums",
          description: "Encourage quality answers with small appreciation payments and recurring encouragement loops.",
        },
        {
          title: "Learning circles",
          description: "Keep classes and knowledge networks healthy with gratitude-based micro-support.",
        },
        {
          title: "Fan and subculture groups",
          description: "Fuel exclusive creator-led engagement and keep high-effort content producers invested.",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Web2-feeling product flow built on a specialized micropayment rail.",
      description:
        "Keep your existing community product intact. We add one clean value layer for member support.",
      steps: [
        {
          title: "Community activates Fiber Link",
          description:
            "Operators configure platform-level settings: branding, payout policy, and user role behavior.",
        },
        {
          title: "Members tip in context",
          description:
            "A support action looks like a normal platform interaction with instant payment confirmation.",
        },
        {
          title: "Creator balances update",
          description:
            "Earnings are visible instantly and consistently across your community experience.",
        },
        {
          title: "Withdrawal and controls",
          description:
            "Creators request conversion or payout windows while operators keep operational oversight.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "What teams ask before piloting.",
      items: [
        {
          question: "Is this a wallet product?",
          answer:
            "No. Fiber Link is a community payment layer. Members can support creators quickly while admins keep configuration in one place.",
        },
        {
          question: "Who benefits first?",
          answer:
            "Community admins gain control and clarity, creators gain an earnings path, and members gain simple support mechanics.",
        },
        {
          question: "Do members need technical payment knowledge?",
          answer:
            "No. The user experience stays community-first and hides technical details from normal contributors.",
        },
      ],
      cta: "Need a more specific flow for your community?",
    },
    requestDemo: {
      eyebrow: "Request Demo",
      title: "Get early access to the creator economy layer.",
      description:
        "We are collecting interest first. Leave your details and we will invite teams when early demo slots open.",
      steps: ["Share your platform type", "Tell us your role and goal", "Tell us what success looks like for your community"],
      form: {
        name: "Name",
        email: "Work email",
        org: "Community or Company",
        role: "Role",
        notes: "Notes",
        submit: "Request Demo",
        placeholderName: "Your name",
        placeholderEmail: "you@company.com",
        placeholderOrg: "Creator Hub",
        placeholderNotes:
          "What is your community structure, target payout model, and what you hope to test first?",
        success:
          "Thanks. Your interest is recorded and your team is on the early-access list.",
      },
      roleOptions: [
        "Founder / Owner",
        "Community Admin",
        "Moderator / Ops",
        "Creator / Contributor",
        "Investor / Partner",
        "Other",
      ],
    },
    footer: {
      text: "Fiber Link helps communities reward contribution and unlock sustainable creator income.",
      legal: "Built for CKB Fiber integration and product teams shipping creator economies.",
    },
    images: {
      home: {
        query: "community creators economy",
        fallback: "/images/home-fallback.svg",
      },
      product: {
        query: "payment dashboard",
        fallback: "/images/product-fallback.svg",
      },
      how: {
        query: "team collaboration",
        fallback: "/images/how-fallback.svg",
      },
    },
  },
  zh: {
    brand: "Fiber Link",
    nav: {
      home: "首页",
      product: "产品",
      useCases: "使用场景",
      howItWorks: "工作原理",
      faq: "常见问题",
      requestDemo: "申请演示",
      source: "源码",
    },
    labels: {
      theme: "主题",
      light: "浅色",
      dark: "深色",
      system: "跟随系统",
      locale: "语言",
      comingSoon: "即将推出",
      requestDemoTitle: "申请演示",
    },
    hero: {
      eyebrow: "社区变现，不增加复杂度",
      title: "为社区提供打赏与创作者收益能力。",
      description:
        "Fiber Link 通过即时打赏与低摩擦小额支付，让每一条优质内容都能快速转化为收益。",
      primary: "申请演示",
      secondary: "查看功能",
      highlights: ["专为社区运营而建", "更清晰的创作者收益", "低摩擦即时支付"],
      cardTitle: "Fiber Link 能做到",
      cards: ["成员可一键支持创作者。", "管理员无需让每个用户学习复杂支付。", "创作者可见收益变化。", "持续激励让社区讨论更活跃。"],
    },
    product: {
      eyebrow: "产品说明",
      title: "我们提供面向社区的支付层，而不是钱包产品。",
      intro:
        "将 Fiber Link 集成到你的社区后，可快速启动打赏和提现机制，降低交易门槛。",
      cards: [
        {
          title: "给管理员",
          description:
            "设置社区规则、分润策略和结算策略，降低平台改造成本。",
        },
        {
          title: "给创作者",
          description:
            "在发布内容的同一环境内实时获得支持，积累可追溯的收益记录。",
        },
        {
          title: "给成员",
          description:
            "在熟悉界面完成小额支持，流程简洁、门槛更低。",
        },
      ],
      visualTitle: "创作者数据看板",
      visualCaption: "聚焦创作者与运营可读的收益与支持状态。",
    },
    useCases: {
      eyebrow: "使用场景",
      title: "适用于内容与社群高度活跃的场景。",
      description:
        "无论是垂类社区还是兴趣社区，都能把真实互动转换为真实收益。",
      cases: [
        {
          title: "创作社区",
          description: "对高质量内容贡献及时打赏，鼓励持续输出。",
        },
        {
          title: "开发者社区",
          description: "对解决问题、优质答复和持续贡献者进行即时支持。",
        },
        {
          title: "学习社群",
          description: "课程分享者与优质答疑者可持续获得成员认可。",
        },
        {
          title: "粉丝群体",
          description: "让忠实粉丝通过小额支持表达长期认可。",
        },
      ],
    },
    howItWorks: {
      eyebrow: "工作原理",
      title: "将传统体验保留，同时接入更高效支付能力。",
      description: "我们不替换你的社区产品，而是在其上扩展支付层，保留原有体验。",
      steps: [
        {
          title: "社区接入 Fiber Link",
          description: "管理员完成接入并设定支持和结算策略。",
        },
        {
          title: "成员在内容内支持",
          description: "操作轻量，支付反馈在页面内即时完成。",
        },
        {
          title: "收益实时更新",
          description: "创作者与管理员同步看到收益状态变化。",
        },
        {
          title: "可控的提现和结算",
          description: "系统保留可控窗口，不让资金行为失控。",
        },
      ],
    },
    faq: {
      eyebrow: "常见问题",
      title: "先回答常见疑问。",
      items: [
        {
          question: "这是不是钱包产品？",
          answer: "不是。Fiber Link 是面向社区的收款层，核心目标是简化运营和创作者提现路径。",
        },
        {
          question: "谁是主要买方？",
          answer: "社区管理员和运营团队，特别是希望提升参与度与创作者粘性的团队。",
        },
        {
          question: "成员需要懂区块链吗？",
          answer: "不需要。我们将底层复杂度屏蔽在产品层。",
        },
      ],
      cta: "如果你有独特的场景，我们愿意先帮你画一版流程。",
    },
    requestDemo: {
      eyebrow: "申请演示",
      title: "先收集意向，尽快开启早期邀测。",
      description: "演示名额有限。请填写基本信息，我们会按照真实场景优先安排。",
      steps: ["选择你正在运行的平台", "说明你的运营角色", "说明希望验证的核心问题"],
      form: {
        name: "姓名",
        email: "工作邮箱",
        org: "社区 / 公司",
        role: "角色",
        notes: "备注",
        submit: "申请演示",
        placeholderName: "你的名字",
        placeholderEmail: "you@company.com",
        placeholderOrg: "产品社区",
        placeholderNotes: "你希望在演示中验证什么？",
        success: "提交成功，已加入演示优先名单。",
      },
      roleOptions: ["创始人 / 主理人", "管理员", "运营", "创作者", "投资人 / 合作方", "其他"],
    },
    footer: {
      text: "Fiber Link 帮助社区把贡献转化为创作者可持续收入。",
      legal: "面向 CKB Fiber 集成场景，面向成长型社区产品。",
    },
    images: {
      home: { query: "online community creators", fallback: "/images/home-fallback.svg" },
      product: { query: "payment interface", fallback: "/images/product-fallback.svg" },
      how: { query: "digital collaboration", fallback: "/images/how-fallback.svg" },
    },
  },
  ja: {
    brand: "Fiber Link",
    nav: {
      home: "ホーム",
      product: "プロダクト",
      useCases: "ユースケース",
      howItWorks: "使い方",
      faq: "FAQ",
      requestDemo: "デモ申請",
      source: "ソース",
    },
    labels: {
      theme: "テーマ",
      light: "ライト",
      dark: "ダーク",
      system: "端末の設定",
      locale: "言語",
      comingSoon: "近日公開",
      requestDemoTitle: "デモ申請",
    },
    hero: {
      eyebrow: "コミュニティの報酬化を、シンプルに",
      title: "コミュニティ向けティップとクリエイター収益化。",
      description: "Fiber Link は、インスタントティップと少額決済を通じて、参加者からクリエイターへの価値移転を自然な体験にします。",
      primary: "デモ申請",
      secondary: "機能を見る",
      highlights: ["運営者向けに設計", "クリエイター中心の収益設計", "高速・低摩擦の支払い"],
      cardTitle: "Fiber Link でできること",
      cards: ["投稿者へ即時ティップ", "運営の複雑さを吸収", "収益履歴を一目で確認", "コミュニティ健全性の促進"],
    },
    product: {
      eyebrow: "製品",
      title: "コミュニティのための決済レイヤー。",
      intro: "既存のコミュニティ基盤に組み込めるため、全体体験を崩さずに収益化を開始できます。",
      cards: [
        { title: "運営者向け", description: "設定・レート・支払いルールを統合管理し、導入速度を高めます。" },
        { title: "クリエイター向け", description: "投稿や貢献に連動して支援が反映され、透明性ある収益管理が可能です。" },
        { title: "参加者向け", description: "コメント欄や投稿コンテキスト内で、違和感なく支援できます。" },
      ],
      visualTitle: "収益・支援ダッシュボード",
      visualCaption: "運営もクリエイターも把握しやすい表示を優先。",
    },
    useCases: {
      eyebrow: "ユースケース",
      title: "価値ある投稿に価値ある報酬を。",
      description: "知識共有、趣味コミュニティ、ファンエコノミーで継続的なインセンティブを実装。",
      cases: [
        { title: "クリエイターコミュニティ", description: "質の高い作品や投稿を継続的に支援できます。" },
        { title: "開発者フォーラム", description: "有用な回答や解決行動に対して迅速に感謝を送れます。" },
        { title: "学習コミュニティ", description: "専門知識の共有者に対する少額サポートが継続を促進します。" },
        { title: "ファンコミュニティ", description: "熱量の高い参加者が、自然に支援行動へ移行できます。" },
      ],
    },
    howItWorks: {
      eyebrow: "動作原理",
      title: "既存 UI の文脈を保ちながら決済を追加。",
      description: "コミュニティ体験を壊さず、支持の流れをそのまま報酬化へ変換します。",
      steps: [
        { title: "接続", description: "管理者がプラットフォームに接続し、支援ルールを有効化。" },
        { title: "現場での支援", description: "投稿・スレッド内で即座に支援が行われます。" },
        { title: "残高と履歴", description: "収益は即時更新され、透明に蓄積されます。" },
        { title: "受け取りと管理", description: "運営側で受け取りや申請ルールを柔軟に管理します。" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "導入前の確認ポイント。",
      items: [
        { question: "ウォレット型プロダクトですか？", answer: "いいえ。コミュニティ決済レイヤーとして機能し、ウォレットを前面化しません。" },
        { question: "対象顧客は？", answer: "運営主導コミュニティ、クリエイター運営の収益化を検討しているチーム。" },
        { question: "一般ユーザーの負荷は？", answer: "UI はそのままに近い体験を維持し、決済理解はほぼ不要です。" },
      ],
      cta: "独自条件に合わせた導入を一緒に設計できます。",
    },
    requestDemo: {
      eyebrow: "デモ申請",
      title: "先行体験枠の受付中。",
      description: "いまはデモリスト受付フェーズです。必要情報を共有いただければ優先通知します。",
      steps: ["運営しているコミュニティを選択", "役割と検証したい指標を入力", "必要な検証シナリオを入力"],
      form: {
        name: "お名前",
        email: "メールアドレス",
        org: "コミュニティ / 会社",
        role: "役割",
        notes: "補足",
        submit: "デモ申請",
        placeholderName: "山田 太郎",
        placeholderEmail: "you@company.com",
        placeholderOrg: "Knowledge Circle",
        placeholderNotes: "期待する KPI と運用ルールを教えてください。",
        success: "申請を受け付けました。デモ優先リストに登録しました。",
      },
      roleOptions: ["創業者", "管理者", "コミュニティ運営", "クリエイター", "パートナー", "その他"],
    },
    footer: {
      text: "Fiber Link は貢献を実報酬へ変えるコミュニティ成長基盤です。",
      legal: "CKB Fiber 連携に最適化されたクリエイター収益レイヤー。",
    },
    images: {
      home: { query: "community app", fallback: "/images/home-fallback.svg" },
      product: { query: "financial dashboard", fallback: "/images/product-fallback.svg" },
      how: { query: "team building", fallback: "/images/how-fallback.svg" },
    },
  },
  ko: {
    brand: "Fiber Link",
    nav: {
      home: "홈",
      product: "제품",
      useCases: "활용 사례",
      howItWorks: "작동 방식",
      faq: "FAQ",
      requestDemo: "데모 요청",
      source: "소스",
    },
    labels: {
      theme: "테마",
      light: "라이트",
      dark: "다크",
      system: "시스템",
      locale: "언어",
      comingSoon: "오픈 예정",
      requestDemoTitle: "데모 요청",
    },
    hero: {
      eyebrow: "커뮤니티를 위한 간결한 수익화",
      title: "커뮤니티의 팁과 크리에이터 수익화 기능을 구축합니다.",
      description: "Fiber Link는 즉시 팁과 소액 결제로 커뮤니티 기여가 실질적 수익으로 전환되는 흐름을 만듭니다.",
      primary: "데모 요청",
      secondary: "기능 살펴보기",
      highlights: ["운영자가 관리하기 쉽게", "크리에이터 중심 정산 구조", "즉시 처리 가능한 지급"],
      cardTitle: "Fiber Link가 가능한 일",
      cards: ["멤버가 한 번에 창작자를 응원", "운영자는 지갑/온체인 복잡성은 신경 쓸 필요 없음", "크리에이터 수익 변화를 즉시 표시", "참여를 촉진하는 보상 루프 형성"],
    },
    product: {
      eyebrow: "제품 소개",
      title: "커뮤니티용 결제 레이어, 지갑형 제품이 아님.",
      intro: "기존 커뮤니티 서비스 안에 통합되는 방식으로 빠르게 시행 가능합니다.",
      cards: [
        { title: "운영자용", description: "정책, 수수료, 지급 규칙을 통합 설정하고 운영 효율을 높입니다." },
        { title: "크리에이터용", description: "컨텐츠별로 지급이 반영되어 투명하고 꾸준한 수익을 확인할 수 있습니다." },
        { title: "멤버용", description: "콘텐츠 내에서 별도 전환 없이 자연스럽게 팁을 보낼 수 있습니다." },
      ],
      visualTitle: "보상 현황 대시보드",
      visualCaption: "운영·크리에이터 모두가 빠르게 읽을 수 있는 구조입니다.",
    },
    useCases: {
      eyebrow: "활용 사례",
      title: "기여가 금전적 보상으로 연결되는 곳.",
      description: "교육 커뮤니티, 팬덤, 개발자 포럼 등에서 멤버 기여를 바로 수익으로 연결할 수 있습니다.",
      cases: [
        { title: "크리에이터 커뮤니티", description: "좋은 콘텐츠와 기여를 실시간으로 보상해 참여를 늘립니다." },
        { title: "개발자 포럼", description: "유용한 답변과 지식 공유를 즉시 보상해 질 높은 정보가 유지됩니다." },
        { title: "학습 그룹", description: "강의자 및 답변자에 대한 지속적인 응원을 지원합니다." },
        { title: "팬 커뮤니티", description: "팬들이 창작자에게 지속적인 지지와 기여를 보낼 수 있습니다." },
      ],
    },
    howItWorks: {
      eyebrow: "작동 방식",
      title: "기존 경험을 유지하고 결제 기능만 추가합니다.",
      description: "커뮤니티 플로우는 그대로, 결제와 수익화만 자연스럽게 덧입히는 전략입니다.",
      steps: [
        { title: "커뮤니티 연결", description: "운영자가 통합 설정을 마치고 결제 규칙을 적용합니다." },
        { title: "콘텐츠 내 지지", description: "멤버는 컨텍스트 내에서 바로 팁/지원을 보낼 수 있습니다." },
        { title: "수익 잔액 반영", description: "창작자의 수익 변동이 즉시 표시됩니다." },
        { title: "출금 관리", description: "출금 정책은 운영자가 통제 가능한 타이밍으로 배치됩니다." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "도입 전 확인해야 할 항목들.",
      items: [
        { question: "지갑 상품인가요?", answer: "아닙니다. 커뮤니티 결제 레이어이며, 일반 멤버는 복잡한 지갑 조작이 필요 없습니다." },
        { question: "누가 주고객인가요?", answer: "커뮤니티 운영자와 창작자, 그리고 활성 멤버 관계를 강화하려는 팀입니다." },
        { question: "일반 사용자가 어려워하지 않나요?", answer: "UX는 커뮤니티 내 기존 동작과 유사하게 설계되어 진입장벽이 낮습니다." },
      ],
      cta: "독특한 정책이 있다면 함께 검토 후 데모 시나리오를 맞춰드릴 수 있습니다.",
    },
    requestDemo: {
      eyebrow: "데모 요청",
      title: "얼리 액세스 우선순위 대기열을 운영합니다.",
      description: "연락처를 남겨 주시면, 커뮤니티 유형별로 데모 초대 순위를 반영해 안내해드립니다.",
      steps: ["운영 중인 커뮤니티 유형", "역할과 검증 목표", "테스트하고 싶은 KPI/문제"],
      form: {
        name: "이름",
        email: "이메일",
        org: "커뮤니티 / 기업",
        role: "역할",
        notes: "추가 메모",
        submit: "데모 신청",
        placeholderName: "홍길동",
        placeholderEmail: "you@company.com",
        placeholderOrg: "Creator Circle",
        placeholderNotes: "원하는 데모 범위를 짧게 적어 주세요.",
        success: "신청이 등록되었습니다. 데모 대기열에 등록되었어요.",
      },
      roleOptions: ["설립자", "운영자", "모더레이터", "크리에이터", "파트너", "기타"],
    },
    footer: {
      text: "Fiber Link는 커뮤니티 기여를 창작자 수익으로 연결하는 결제 레이어입니다.",
      legal: "CKB Fiber 기반 커뮤니티 수익화 파트너십에 최적화됨.",
    },
    images: {
      home: { query: "online community", fallback: "/images/home-fallback.svg" },
      product: { query: "analytics chart", fallback: "/images/product-fallback.svg" },
      how: { query: "teamwork workspace", fallback: "/images/how-fallback.svg" },
    },
  },
};

export const getTranslation = (locale, key) => {
  const parts = key.split(".");
  let value = translations[locale] || translations[defaultLocale];
  for (const part of parts) {
    value = value?.[part];
  }
  return value ?? null;
};
