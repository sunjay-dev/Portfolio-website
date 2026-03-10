"use client";

import Icon from "@/components/ui/Icon";

type Props = {
    url: string;
};

export default function GithubLink({ url }: Props) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="opacity-50 hover:opacity-100 transition-opacity duration-200 dark:text-white"
            title="View on GitHub"
        >
            <Icon icon="mdi:github" width="18" height="18" />
        </a>
    );
}
