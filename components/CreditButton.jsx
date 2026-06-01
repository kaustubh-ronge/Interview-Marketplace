"use client"

import { useState } from "react"
import { Button } from "./ui/button";
import { Coins } from "lucide-react";
import UpgradeModal from "./UpgradeModal";

export default function CreditButton({ role, credits }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (role === "INTERVIEWER") {
            window.location.href = "/dashboard"
        } else {
            setOpen(true);
        }
    }

    return (
        <>
            <Button
                variant="ghost"
                className="border-amber-400/20 text-amber-400 cursor-pointer bg-amber-400/20 backdrop-blur-2xl"
                onClick={handleClick}
            >
                <Coins size={14} />
                <span>{credits} {role === "INTERVIEWER" ? "EARNED" : "CREDITS"}</span>
            </Button>

            <UpgradeModal open={open} onOpenChange={setOpen} />
        </>
    )
}