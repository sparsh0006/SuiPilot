# SuiPilot 🤖💧

**SuiPilot: Your AI co-pilot for navigating the Sui universe, one conversation at a time.**

SuiPilot is an innovative AI-powered agent designed to simplify and enhance user interaction with the Sui blockchain. Using natural language, users can effortlessly manage assets, execute transactions, and engage with DeFi protocols. Powered by Langchain, the Vercel AI SDK, and the SuiAgentKit, SuiPilot translates conversational commands into on-chain actions.


## ✨ Features

*   **Conversational On-Chain Actions:** Interact with the Sui blockchain using natural language.
*   **AI-Powered Agent:** Utilizes advanced LLMs (GPT-4o-mini by default) and the LangGraph agentic framework.
*   **DeFi Protocol Integration:**
    *   **Swaps:** Cetus Protocol, Navi Protocol
    *   **Lending & Borrowing:** Suilend Protocol, Navi Protocol
    *   **Liquid Staking:** SpringSui
*   **Real-time Data:** Access market data from DexScreener and price feeds from Pyth Network.
*   **Wallet Operations:** Check balances, transfer tokens, and more.
*   **Intermediate Steps Visibility:** Option to view the agent's thought process and tool usage.
*   **Modern UI:** Sleek and intuitive chat interface built with Next.js, Tailwind CSS, and Framer Motion.
*   **Streaming Responses:** Get real-time feedback from the AI agent.

## 🚀 Demo

*   **[Live Demo](https://sui-pilot.vercel.app/)**
*   **[Video Demo](https://drive.google.com/drive/folders/1yr3Gi7lUPTnIpitPpemNri22w5R-lwrZ?usp=drive_link)** 

## 🛠️ Tech Stack

*   **Frontend:** Next.js 15+, React, TypeScript
*   **Styling:** Tailwind CSS, Framer Motion
*   **AI & LLM Orchestration:** Langchain, LangGraph, Vercel AI SDK
*   **LLM:** OpenAI (GPT-4o-mini), DeepSeek (optional)
*   **Sui Blockchain Interaction:** SuiAgentKit 
*   **UI Components:** Lucide React (Icons), React Toastify (Notifications)
*   **Markdown Processing:** Marked, DOMPurify

## ⚙️ Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   pnpm (or npm/yarn)
*   Sui Wallet with some SUI tokens (Testnet or Devnet for development)

### Environment Variables

1.  Copy the example environment file:
    ```bash
    cp .env.example .env
    ```
2.  Fill in your API keys and Sui private key in the `.env` file:
    ```
    OPENAI_API_KEY=your_openai_api_key_here
    DEEPSEEK_API_KEY=your_deepseek_api_key_here (optional)
    RPC_URL=your_sui_rpc_url_here (e.g., https://fullnode.testnet.sui.io:443)
    SUI_PRIVATE_KEY=your_sui_private_key_hex_string_here (0x...)
    ```
    **⚠️ Security Note:** Never commit your `.env` file with actual private keys to a public repository. The `SUI_PRIVATE_KEY` is used by the backend agent to perform on-chain actions. For production, manage this key securely.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/sparsh0006/suipilot.git
    cd suipilot
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    ```
    (or `npm install` or `yarn install`)

### Running the Development Server

```bash
pnpm dev
```


Open http://localhost:3000 with your browser to see the result.

The API endpoint for the chat is available at http://localhost:3000/api/chat.

### 📜 License

This project is under the [MIT](https://opensource.org/licenses/MIT) License.



