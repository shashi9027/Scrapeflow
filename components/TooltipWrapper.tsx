"use client"
import React, { ReactNode } from 'react'
import { Tooltip, TooltipContent, TooltipProvider } from './ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';

interface Props {
    children: ReactNode;
    content: ReactNode;
    side?: "top" | "bottom" | "left" | "right"

}

function TooltipWrapper(props: Props) {
    return <TooltipProvider delayDuration={0}>
        <Tooltip>
             <TooltipTrigger asChild>
                 {props.children}
             </TooltipTrigger>
             <TooltipContent side={props.side}>
                {props.content}
             </TooltipContent>
        </Tooltip>
    </TooltipProvider>
}

export default TooltipWrapper