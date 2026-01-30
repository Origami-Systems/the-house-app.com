<template>
    <form @submit.prevent class="form">
        <TextField label="Name" type="text" v-model="name" required placeholder="Enter your name" />
        <TextField label="Email Address" type="email" v-model="email" required placeholder="Enter your email" />
        <TextField label="Organization" type="text" v-model="organization" placeholder="Your company, school, or group"
            required />
        <WithLabel label="How did you hear about us?">
            <Dropdown type="text" v-model="hear" :option-display="(a: string) => a"
                :options="howDidYouHearAboutUsOptions" required />
        </WithLabel>
        <TextField v-if="hear === 'Other'" label="Please specify" type="text" v-model="howDidYouHearAboutUs" required
            placeholder="Tell us where you heard about us" />
        <TextArea label="What would you like to know more about? (optional)" v-model="question"
            placeholder="Tell us what interests you or any questions you have" class="text-area" />
        <TextField v-model="hp_field" name="hp_field" autocomplete="off" tabindex="-1" style="display: none;" />
        <AppSubmitButton type="submit" @click="submit" primary :disabled>Submit</AppSubmitButton>
    </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { TextField, TextArea, WithLabel, Dropdown, AppSubmitButton, useNotifications } from '@origami-systems/ui';
import { SubmitContact } from '@utils/SubmitContact';

const hp_field = ref('');
const name = ref('');
const email = ref('');
const organization = ref('');
const howDidYouHearAboutUsOptions = [
    'Website',
    'Social Media',
    'Friend or Colleague',
    'Advertisement',
    'Other'
];
const hear = ref('Website');
const howDidYouHearAboutUs = ref("");
const question = ref("");
const notifications = useNotifications();

const disabled = computed(() => (
    !name.value ||
    !email.value ||
    !organization.value ||
    !hear.value ||
    (hear.value === 'Other' && !howDidYouHearAboutUs.value)
))

const submit = async (done: () => void) => {
    try {
        if (!name.value || !email.value || !organization.value || !hear.value) {
            notifications.error('Please fill out all required fields.');
            return;
        }
        if (hp_field.value !== '') {
            // Honeypot field filled out, likely a bot
            notifications.error('Submission failed. Please try again.');
            return;
        }
        const hearValue = hear.value === 'Other' ? howDidYouHearAboutUs.value : hear.value;
        const result = await SubmitContact(name.value, email.value, organization.value, hearValue, question.value.trim() === '' ? undefined : question.value.trim());
        if (result) {
            notifications.success('Your message has been sent successfully. We will get back to you shortly.');
            hp_field.value = '';
            name.value = '';
            email.value = '';
            organization.value = '';
            hear.value = 'Website';
            howDidYouHearAboutUs.value = '';
            question.value = '';
        }
    } finally {
        done();
    }
}
</script>

<style lang="scss" scoped>
.text-area {
    :deep(label) {
        text-align: left;
        margin-bottom: 10px;
    }
}

.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}
</style>
