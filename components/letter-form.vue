<template>
    <div class="letter-form">
        <form>
            <div class="letter-form__section mb-6">
                <h2>Your info</h2>
                <div class="letter-form__row">
                    <div class="grid grid-cols-12 gap-2">
                        <div class="letter-form__field col-span-2">
                            <label>
                                <span>Title</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                        <div class="letter-form__field col-span-5">
                            <label>
                                <span>Fist name</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                        <div class="letter-form__field col-span-5">
                            <label>
                                <span>Title</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="letter-form__row">
                    <div class="grid grid-cols-12 gap-2">
                        <div class="letter-form__field col-span-6">
                            <label>
                                <span>Phone</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                        <div class="letter-form__field col-span-6">
                            <label>
                                <span>Email</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="letter-form__row">
                    <div class="grid grid-cols-12 gap-2">
                        <div class="letter-form__field col-span-6">
                            <label>
                                <span>Street</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                        <div class="letter-form__field col-span-6">
                            <label>
                                <span>Postal code</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                    </div>
                </div>
                <div class="letter-form__row">
                    <div class="grid grid-cols-12 gap-2">
                        <div class="letter-form__field col-span-6">
                            <label>
                                <span>City</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                        <div class="letter-form__field col-span-6">
                            <label>
                                <span>Country</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="letter-form__section">
                <h2>Recipient</h2>
                <div class="letter-form__row">
                    <div class="grid grid-cols-12 gap-2">
                        <div class="letter-form__field col-span-2">
                            <label>
                                <span>Title</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                        <div class="letter-form__field col-span-5">
                            <label>
                                <span>Fist name</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                        <div class="letter-form__field col-span-5">
                            <label>
                                <span>Title</span>
                                <input class="letter-form__input w-full" type="text" />
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
                                <span>Department</span>
                                <input class="letter-form__input w-full" type="text" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
interface Form {
    jobPosition: string;
    title: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
    recipientTitle: string;
    recipientFirstName: string;
    recipientLastName: string;
    company: string;
    department: string;
}

const form = ref<Form>({
    jobPosition: "",
    title: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
    recipientTitle: "",
    recipientFirstName: "",
    recipientLastName: "",
    company: "",
    department: ""
})

const { data } = await useFetch("/api/openai")
console.log(data.value)
</script>

<style lang="scss" scoped>
.letter-form {
    max-width: 600px;

    &__section {
        @apply p-6;
        background-color: white;
        border-radius: 10px;
    }

    &__field {
        @apply mb-4;
    }

    &__input {
        border: 1px solid #d4d4d4;
        border-radius: 2px;
    }
}
</style>