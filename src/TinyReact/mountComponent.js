import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";

export default function mountComponent(virtualDOM, container, oldDOM) {
    let nextVirtualDOM = null
    // 判断组件是类组件还是函数组件
    if (isFunctionComponent(virtualDOM)) {
        // 函数组件
        nextVirtualDOM = buildFunctionComponent(virtualDOM)
    }
    if (isFunction(nextVirtualDOM)) {
        mountComponent(nextVirtualDOM, container, oldDOM)
    } else {
        mountNativeElement(nextVirtualDOM, container, oldDOM)
    }
}

function buildFunctionComponent(virtualDOM) {
    return virtualDOM.type(virtualDOM.props || {})
}