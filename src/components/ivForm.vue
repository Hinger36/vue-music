<template>
    <div>
        <Table :columns="columns1" :data="data1"></Table>
        <Button type="primary" @click="writeData">ok</Button>
        <Slider v-model="value1"></Slider>
    </div>
    
</template>
<script>
    import { Table, Button } from 'iview';
    import axios from 'axios';
    export default {
        mounted() {
            axios.get('http://bluebooo.com:4000/playlist/catlist')
                .then( response => {
                   this.data1 = response.data.sub
                }
            )
        },
        components: {
            'Table': Table
        },
        data () {
            return {
                
                columns1: [
                    {
                        title: '全部分类',
                        key: 'name'
                    }
                   
                ],
                data1: [],
                
                
            }
        },
        methods: {
            writeData() {
                this.$store.commit('getData', {
                    task: this.data1
                })
            }
        }
    }
</script>