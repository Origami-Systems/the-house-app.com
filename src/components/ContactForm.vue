<template>
    <form @submit.prevent="submit" class="form">
        <TextField
            v-model="name"
            label="Name"
            required
            placeholder="Enter your name"
            autocomplete="name" />
        <Field label="Email Address" required v-slot="field">
            <input
                :id="field.id"
                :aria-describedby="field.describedBy"
                type="email"
                v-model="email"
                placeholder="Enter your email"
                autocomplete="email" />
        </Field>
        <TextField
            v-model="organization"
            label="Organization"
            required
            placeholder="Your company, school, or group"
            autocomplete="organization" />
        <Field label="How did you hear about us?" required v-slot="field">
            <Dropdown
                :id="field.id"
                :aria-describedby="field.describedBy"
                v-model="hear"
                :options="howDidYouHearAboutUsOptions"
                required />
        </Field>
        <TextField
            v-if="hear === 'Other'"
            v-model="howDidYouHearAboutUs"
            label="Please specify"
            required
            placeholder="Tell us where you heard about us" />
        <TextArea
            label="What would you like to know more about?"
            v-model="question"
            placeholder="Tell us what interests you or any questions you have"
            stacked />
        <input
            type="text"
            v-model="hp_field"
            name="hp_field"
            autocomplete="off"
            tabindex="-1"
            style="display: none" />
        <AppSubmitButton type="submit" primary :disabled="disabled || submitting">
            {{ submitting ? "Sending..." : "Submit" }}
        </AppSubmitButton>
    </form>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import {
    TextArea,
    TextField,
    Field,
    Dropdown,
    AppSubmitButton,
    useNotifications,
} from "@origami-systems/ui";
import { SubmitContact } from "@utils/SubmitContact";

const submitting = ref(false);
const hp_field = ref("");
const name = ref("");
const email = ref("");
const organization = ref("");
const howDidYouHearAboutUsOptions = [
    "Website",
    "Social Media",
    "Friend or Colleague",
    "Advertisement",
    "Other",
];
const hear = ref("Website");
const howDidYouHearAboutUs = ref("");
const question = ref("");
const notifications = useNotifications();

const disabled = computed(() => !name.value || !email.value || !organization.value || !hear.value);

const submit = async () => {
    if (submitting.value) return;
    submitting.value = true;
    try {
        if (!name.value || !email.value || !organization.value || !hear.value) {
            notifications.error("Please fill out all required fields.");
            return;
        }
        if (hp_field.value !== "") {
            // Honeypot field filled out, likely a bot
            notifications.error("Submission failed. Please try again.");
            return;
        }
        const hearValue = hear.value === "Other" ? howDidYouHearAboutUs.value : hear.value;
        const result = await SubmitContact(
            name.value,
            email.value,
            organization.value,
            hearValue,
            question.value.trim() === "" ? undefined : question.value.trim(),
        );
        if (result) {
            notifications.success(
                "Your message has been sent successfully. We will get back to you shortly.",
            );
            hp_field.value = "";
            name.value = "";
            email.value = "";
            organization.value = "";
            hear.value = "Website";
            howDidYouHearAboutUs.value = "";
            question.value = "";
        }
    } finally {
        submitting.value = false;
    }
};
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}
</style>
