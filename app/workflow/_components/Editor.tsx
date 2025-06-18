"use client"
 
import {ReactFlowProvider} from "@xyflow/react"

import { Workflow } from '@prisma/client'
import React from 'react'
import FlowEditor from "./FlowEditor"

function Editor({workflow}:{workflow:Workflow}) {
  return <ReactFlowProvider>
            <div className="flex flex-col h-full w-full overflow-hidden">
                <section className="flex h-full overflow-auto">
                   <FlowEditor workflow={workflow}/>
                </section>
            </div>
         </ReactFlowProvider>
}

export default Editor