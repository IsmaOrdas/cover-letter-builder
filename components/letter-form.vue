<template>
    <div class="letter-form flex w-full">
        <div class="letter-form__left w-1/2">
            <form @submit.prevent class="letter-form__form">
                <div class="letter-form__section mb-6">
                    <h2>Your info</h2>
                    <div class="letter-form__row">
                        <div class="grid grid-cols-12 gap-2">
                            <div class="letter-form__field col-span-6">
                                <label>
                                    <span>Fist name</span>
                                    <input v-model="form.firstName" class="letter-form__input w-full" type="text" />
                                </label>
                            </div>
                            <div class="letter-form__field col-span-6">
                                <label>
                                    <span>Last name</span>
                                    <input v-model="form.lastName" class="letter-form__input w-full" type="text" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="letter-form__row">
                        <div class="grid grid-cols-12 gap-2">
                            <div class="letter-form__field col-span-6">
                                <label>
                                    <span>City</span>
                                    <input v-model="form.city" class="letter-form__input w-full" type="text" />
                                </label>
                            </div>
                            <div class="letter-form__field col-span-6">
                                <label>
                                    <span>Country</span>
                                    <input v-model="form.country" class="letter-form__input w-full" type="text" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="letter-form__row">
                        <div class="grid grid-cols-12 gap-2">
                            <div class="letter-form__field col-span-6">
                                <label>
                                    <span>Company</span>
                                    <input class="letter-form__input w-full" type="text" />
                                </label>
                            </div>
                            <div class="letter-form__field col-span-6">
                                <label>
                                    <span>Job position</span>
                                    <input class="letter-form__input w-full" type="text" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="letter-form__row">
                        <button @click="prepareCall">Generate</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="letter-form__right w-1/2">
            <div class="letter-form__result">
                {{ content }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useOPenAi } from "@/composables/useOpenAi";

interface Form {
    jobPosition: string;
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    comnpany: string;
}

const { generateLetter, content, loading } = useOPenAi();
const form = ref<Form>({
    jobPosition: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    comnpany: ""
})

function prepareCall () {
    const prompt = createPromt();
    generateLetter(prompt);
}

function createPromt () {
    return `Write a cover letter for ${form.value.firstName} ${form.value.lastName}, who is a ${form.value.jobPosition} living in ${form.value.city}, ${form.value.country} and is intered in working for a company like ${form.value.comnpany}. Phone number is ${form.value.phone} and ${form.value.email}.`;
}
</script>

<style lang="scss" scoped>
.letter-form {
    
    &__form {
        max-width: 600px;
    }

    &__section {
        @apply p-6;
        border-radius: 10px;
    }

    &__field {
        @apply mb-4;
    }

    &__input {
        border: 1px solid #d4d4d4;
        border-radius: 4px;
        height: 32px;
        padding: 0 6px;
    }

    &__result {
        background-color: #fff;
        min-height: 500px;
        padding: 12px;
        white-space: pre-line
    }
}
</style>