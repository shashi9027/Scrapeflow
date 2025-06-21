"use client"

import { UpdateWorkflow } from "@/actions/workflows/updateWorkflow"
import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query"
import { useReactFlow } from "@xyflow/react"
import { CheckIcon } from "lucide-react"

function SaveBtn({workflowId}:{workflowId:string}) {
    const {toObject} = useReactFlow()
    const saveMutation = useMutation({
      mutationFn: UpdateWorkflow,
      onSuccess:
    })
  return (
    <Button 
    variant={"outline"} 
    className="flex items-center gap-2" 
    onClick={()=>{alert("TODO")}}>
    <CheckIcon size={16} className="stroke-green-400"/>
    Save
    </Button>
  )
}

export default SaveBtn