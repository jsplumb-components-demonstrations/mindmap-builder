import { newInstance, MindmapBuilder } from "@jsplumb-components/mindmap"

const mindmap:MindmapBuilder = newInstance({
    container:document.getElementById("container"),
    inspector:{
        container:document.getElementById("inspector")
    },
    undoRedo:{
        undo:document.querySelector("[data-action='undo']"),
        redo:document.querySelector("[data-action='redo']")
    }
})

mindmap.loadUrl("../example-mindmap.json", () => {
    mindmap.zoomToFit()
})

document.getElementById("btnClear").addEventListener("click", () => {
    if (confirm("Clear dataset?")) {
        mindmap.clear()
    }
})
