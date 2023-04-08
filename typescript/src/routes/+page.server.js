import {Util} from "../lib/util"
import {lang} from "./lang";

let langs;
lang.subscribe((value) => langs = value)
export const load = async ({fetch, params}) => {
    const myUtil = new Util();
    const content = myUtil.fetchFileContents()
    return {params, content}
}
