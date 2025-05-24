// Path: components/ChatMessageBubble.tsx
"use client";

import markdownToHtml from '@/utils/markdownToHTML';
import type { Message } from 'ai/react';
import { useMemo } from 'react';

interface Source {
  pageContent: string;
  metadata?: {
    loc?: {
      lines?: {
        from: number;
        to: number;
      };
    };
  };
}

export function ChatMessageBubble(props: {
  message: Message;
  aiEmoji?: string;
  sources: Source[];
}) {
  const isUser = props.message.role === 'user';

  const bubbleColorClassName = isUser
    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
    : 'bg-slate-700 text-slate-200';

  // This alignment class, combined with w-fit, will correctly position the fit-content bubble.
  const alignmentClassName = isUser ? 'ml-auto' : 'mr-auto';

  const userPrefixEmoji = '👤';
  const aiPrefixEmoji = props.aiEmoji || '🤖';
  const prefix = isUser ? userPrefixEmoji : aiPrefixEmoji;

  const contentHtml = useMemo(() => {
    if (!props.message.content) return '';
    return markdownToHtml(props.message.content);
  }, [props.message.content]);

  const hasMessageContent = props.message.content && props.message.content.trim() !== '';
  const hasSources = props.sources && props.sources.length > 0;

  if (!hasMessageContent && !hasSources) {
    return null;
  }

  return (
    <div
      // ADDED w-fit here. This is crucial for the bubble to be only as wide as its content.
      // alignmentClassName (ml-auto/mr-auto) will then align this fit-content bubble.
      className={`${alignmentClassName} ${bubbleColorClassName} w-fit rounded-xl px-4 py-3 max-w-[85%] sm:max-w-[80%] my-2 flex items-start shadow-md`}
    >
      <div className="mr-2.5 pt-0.5 text-xl select-none">{prefix}</div>
      <div className="flex flex-col min-w-0"> {/* min-w-0 helps with flex item overflow/wrapping */}
        {hasMessageContent && (
          <div
            className={`prose prose-sm sm:prose-base max-w-none ${isUser ? 'prose-invert' : 'prose-invert'} break-words`}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        )}
        {hasSources && (
          <div className={`mt-3 pt-3 border-t ${isUser ? 'border-blue-400/40' : 'border-slate-600'}`}>
            <h4 className={`text-xs font-semibold mb-2 flex items-center ${isUser ? 'text-blue-100' : 'text-slate-300'}`}>
              <span className="mr-1.5 text-sm">🔍</span> Sources:
            </h4>
            <ul className="space-y-1.5 text-xs">
              {props.sources.map((source, i) => (
                <li
                  key={'source:' + i}
                  className={`p-2 rounded-md ${isUser ? 'bg-blue-700/60 text-blue-50' : 'bg-slate-800/70 text-slate-300'} hover:opacity-90 transition-opacity`}
                >
                  <p className="font-medium truncate break-all" title={source.pageContent}>
                    {i + 1}. "{source.pageContent}"
                  </p>
                  {source.metadata?.loc?.lines !== undefined ? (
                    <p className="text-[0.7rem] opacity-70 mt-0.5">
                      (Lines {source.metadata.loc.lines.from} to {source.metadata.loc.lines.to})
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}