// Path: app/chat/page.tsx
"use client";

import { ChatWindow } from '../../components/ChatWindow'; // Ensure this path is correct
import { MessageCircleQuestion } from 'lucide-react';

const ChatPage = () => {
  const MinimalEmptyState = (
    <div className="flex flex-col items-center justify-center text-center h-full p-6 text-slate-400">
      <MessageCircleQuestion size={48} className="mb-5 opacity-70 text-blue-500" />
      <h2 className="text-xl font-medium text-slate-200 mb-2">
        How can I help you with Sui today?
      </h2>
      <p className="text-sm max-w-xs">
        Ask me about transactions, tokens, dApps, or anything else related to the Sui ecosystem.
      </p>
    </div>
  );

  return (
    <div className="flex-grow flex flex-col bg-slate-900">
      <div className="flex-grow flex flex-col min-h-0 p-3 sm:p-4 md:p-6 pt-[calc(48px+0.75rem)] sm:pt-[calc(48px+1rem)] md:pt-[calc(48px+1.5rem)]">
        <div className="flex-grow flex flex-col min-h-0 bg-slate-800/60 rounded-xl shadow-2xl border border-slate-700/70 overflow-hidden backdrop-blur-sm">
          <ChatWindow
            endpoint="api/chat"
            emoji="🤖"
            titleText="SuiPilot : Your Sui AI Agent"
            placeholder="Ask anything about the Sui ecosystem..."
            emptyStateComponent={MinimalEmptyState}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;