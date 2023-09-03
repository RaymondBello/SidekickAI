"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { ProModal } from "@/components/pro-modal";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";


export const DarkmodeToggle = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <>
            {currentTheme == 'dark' ?
                (
                    <Button variant="ghost" size="toggle" onClick={() => setTheme('light')}>
                        <Moon color="grey" size={24} />
                    </Button>
                ) : (
                    <Button variant="ghost" size="toggle" onClick={() => setTheme('dark')}>
                        <Sun color="orange" size={24} />
                    </Button>
                )
            }
        </>
    );
};
