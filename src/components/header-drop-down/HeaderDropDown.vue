<template>
    <div>
        <div @click="toggleActive"><h3>{{selectedItem.key}}</h3></div>
        <div class="dropdown-content content inverted" v-if="isOpen">
            <HeaderDropDownItem v-for="item in props.items" v-bind:key="item" @click="selectItem(item)">{{item.key}}</HeaderDropDownItem>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderDropDownItem from './HeaderDropDownItem.vue';
const props = defineProps({
    items: [],
    defaultItem: {},
    selectedEvent: String
});

const isOpen = ref(false);
const selectedItem = ref(props.defaultItem);
const emit = defineEmits('clicked');

const toggleActive = (() => {
    isOpen.value = !isOpen.value;
});

const selectItem = ((item) => {
    selectedItem.value = item;
    isOpen.value = false;
    emit('clicked', item);
});
</script>

<style lang="scss">
.dropdown-content {
  position: absolute;
  background: inherit;
}
</style>