let arr = {
    children: {
        a: {
            children: {
                d: {
                    children: {
                        g: {
                            children:{}
                        },
                        h: {
                            children:{}
                        },
                        i: {
                            children:{}
                        }
                    }
                },
                e: {
                    children: {
                        j: {
                            children:{}
                        },
                        l: {
                            children:{}
                        }
                    }
                },
                f: {
                    children: {
                        m: {
                            children:{}
                        }
                    }
                }
            }
        },
        b: {
            children:{}
        },
        c: {
            children:{}
        }
    }
}

function deepFirstSearch(node, nodeList) {
    if (node) {
        nodeList.push(node)
        console.log('node.children',node.children)
        if (node.children) {
            for (let child in node.children) {
                 deepFirstSearch(child,nodeList)
             }
        }
    }

    return nodeList
}

let result = []
deepFirstSearch(arr, result)

console.log('result',result)
