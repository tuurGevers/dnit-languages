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

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
