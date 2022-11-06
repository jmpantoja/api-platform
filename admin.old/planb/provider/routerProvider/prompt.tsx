import { useRouter } from "next/router";
import {FC, useEffect} from "react";

import type { PromptProps } from "@pankod/refine-core";

export const Prompt: FC<PromptProps> = ({
    message,
    when,
    setWarnWhen,
}) => {
    const router = useRouter();

    useEffect(() => {
        const routeChangeStart = () => {
            if (when) {
                const allowTransition = window.confirm(message);
                if (allowTransition) {
                    setWarnWhen?.(false);
                } else {
                    router.events.emit("routeChangeError");
                    throw "Abort route change due to unsaved changes prompt. Ignore this error.";
                }
            }
        };
        router.events.on("routeChangeStart", routeChangeStart);

        return () => router.events.off("routeChangeStart", routeChangeStart);
    }, [message, router.events, setWarnWhen, when]);
    return null;
};
