<template>
  <div class="card">
    <div class="flex justify-content-start">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          v-model="filters['global'].value"
          placeholder="Filter by name"
        />
      </span>
    </div>

    <DataTable
      v-model:filters="filters"
      :value="items"
      :showGridlines="showGridlines"
      :stripedRows="stripedRows"
      :globalFilterFields="['']"
      :loading="loading"
      paginator
      :rows="rows"
      tableStyle="min-width: 50rem"
      dataKey="id"
      filterDisplay="row"
      @page="onPage"
    >
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <Column
        v-for="col of headers"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
      >
      </Column>
      <template #footer>
        Total de items: {{ items ? items.length : 0 }} productos.
      </template>
    </DataTable>
  </div>
</template>

<script>
import { FilterMatchMode } from "primevue/api";
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    headers: {
      type: Array,
      required: true,
      default: [],
    },
    items: {
      type: Array,
      required: true,
      default: [],
    },
    loading: {
      type: Boolean,
      required: true,
      default: true,
    },
    rows: {
      type: Number,
      required: true,
      default: 5,
    },
    globalFilterFields: {
      type: Array,
      required: false,
      default: [""],
    },
    stripedRows: {
      type: Boolean,
      required: false,
      default: true,
    },
    showGridlines: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup: (props, { emit }) => {
    console.log("PROPS", props.items.length);
    const first = ref(0);
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      status: { value: null, matchMode: FilterMatchMode.EQUALS },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });

    // onMounted(() => {
    //   props.headers.value = [
    //     { field: "code", header: "Code", sortable: false },
    //     { field: "name", header: "Name", sortable: true },
    //     { field: "category", header: "Category", sortable: true },
    //     { field: "quantity", header: "Quantity", sortable: false },
    //   ];
    //   products.value = [
    //     {
    //       id: "1000",
    //       code: "f230fh0g3",
    //       name: "Bamboo Watch",
    //       description: "Product Description",
    //       image: "bamboo-watch.jpg",
    //       price: 65,
    //       category: "Accessories",
    //       quantity: 24,
    //       inventoryStatus: "INSTOCK",
    //       rating: 5,
    //     },
    //     {
    //       id: "1001",
    //       code: "nvklal433",
    //       name: "Black Watch",
    //       description: "Product Description",
    //       image: "black-watch.jpg",
    //       price: 72,
    //       category: "Accessories",
    //       quantity: 61,
    //       inventoryStatus: "INSTOCK",
    //       rating: 4,
    //     },
    //     {
    //       id: "1002",
    //       code: "zz21cz3c1",
    //       name: "Blue Band",
    //       description: "Product Description",
    //       image: "blue-band.jpg",
    //       price: 79,
    //       category: "Fitness",
    //       quantity: 2,
    //       inventoryStatus: "LOWSTOCK",
    //       rating: 3,
    //     },
    //     {
    //       id: "1003",
    //       code: "244wgerg2",
    //       name: "Blue T-Shirt",
    //       description: "Product Description",
    //       image: "blue-t-shirt.jpg",
    //       price: 29,
    //       category: "Clothing",
    //       quantity: 25,
    //       inventoryStatus: "INSTOCK",
    //       rating: 5,
    //     },
    //     {
    //       id: "1004",
    //       code: "h456wer53",
    //       name: "Bracelet",
    //       description: "Product Description",
    //       image: "bracelet.jpg",
    //       price: 15,
    //       category: "Accessories",
    //       quantity: 73,
    //       inventoryStatus: "INSTOCK",
    //       rating: 4,
    //     },
    //     {
    //       id: "1005",
    //       code: "av2231fwg",
    //       name: "Brown Purse",
    //       description: "Product Description",
    //       image: "brown-purse.jpg",
    //       price: 120,
    //       category: "Accessories",
    //       quantity: 0,
    //       inventoryStatus: "OUTOFSTOCK",
    //       rating: 4,
    //     },
    //     {
    //       id: "1006",
    //       code: "bib36pfvm",
    //       name: "Chakra Bracelet",
    //       description: "Product Description",
    //       image: "chakra-bracelet.jpg",
    //       price: 32,
    //       category: "Accessories",
    //       quantity: 5,
    //       inventoryStatus: "LOWSTOCK",
    //       rating: 3,
    //     },
    //     {
    //       id: "1007",
    //       code: "mbvjkgip5",
    //       name: "Galaxy Earrings",
    //       description: "Product Description",
    //       image: "galaxy-earrings.jpg",
    //       price: 34,
    //       category: "Accessories",
    //       quantity: 23,
    //       inventoryStatus: "INSTOCK",
    //       rating: 5,
    //     },
    //   ];
    //   loading.value = false;
    // });

    const onPage = (event) => {
      console.log("emitiendo");
      emit("change-page", event.page);
    };

    console.log(props.items);
    return {
      headers: props.headers,
      items: props.items,
      globalFilterFields: props.globalFilterFields,
      showGridlines: props.showGridlines,
      stripedRows: props.stripedRows,
      loading: props.loading,
      rows: props.rows,
      filters,
      first,
      onPage,
    };
  },
});
</script>
