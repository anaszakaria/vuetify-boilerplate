<template>
    <div class="modal">
        <div class="modal-msg">
            <h2>{{ title }}</h2>
            <p>{{ subtitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data () {
        return {
            title: 'Elements:',
            subtitle: 'Shared Components'
        }
    }
}
</script>
