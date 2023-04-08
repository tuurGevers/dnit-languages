# +page.server.js

```
import {Util} from "../lib/util"
import {lang} from "./lang";

let langs;
lang.subscribe((value) => langs = value)
export const load = async ({fetch, params}) => {
const myUtil = new Util();
const content = myUtil.fetchFileContents()
return {params, content}
}
```

# svelte page

```
<script>
    import {onMount} from "svelte";
    import {lang} from "./lang";
    import {Util} from "../lib/util";
    export let data;
    let content;
    onMount(()=>{
        const util = new Util();
        $lang = navigator.language || navigator.userLanguage;
        content = util.selectpageContent("home", $lang.substring(0, 2), data.content);
    })
</script>
```


# lang.js

`import {writable} from "svelte/store"; export const lang = writable('en');`

