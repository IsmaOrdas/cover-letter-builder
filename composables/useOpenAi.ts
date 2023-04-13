export function useOPenAi() {
    const content = ref("");
    const loading = ref(false);

    async function generateLetter (prompt: string) {
        loading.value = true;

        const res = await $fetch('/api/openai', { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ prompt: prompt }) 
        })
        loading.value = false;

        if (res?.choices) {
            content.value = res.choices[0].message.content;
        }
    }
    
    return { generateLetter, content, loading }
}