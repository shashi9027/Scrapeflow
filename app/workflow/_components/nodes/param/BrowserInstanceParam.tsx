"use client"

import { ParamProps } from "@/types/appNodes"

function BrowserInstanceParam({param}:ParamProps) {
  return (
     <p className="text-xs">{param.name}</p>
  )
}

export default BrowserInstanceParam