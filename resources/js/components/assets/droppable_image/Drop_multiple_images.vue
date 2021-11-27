<template>
    <div class="flex items-center justify-center text-center mt-2">
        <div class="p-6 bg-gray-100 rounded-lg border-dotted border-4  border-blue-500 py-16 w-full" @dragover="dragover"
            @dragleave="dragleave" @drop="drop">
            <input type="file" name="fields[assetsFieldHandle][]" id="assetsFieldHandle"
                class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file"
                accept=".pdf,.jpg,.jpeg,.png" />

            <label for="assetsFieldHandle" class="block cursor-pointer">
                <div>
                    Drop your file
                    or <span class="underline">click here</span>
                </div>
            </label>

            <!-- this for creating product -->
            <ul class="mt-4" v-if="filelist.length" v-cloak>
                <li class="text-sm p-1" v-for="file in filelist" :key="file.name">

                    {{ file.name }}<button class="ml-2" type="button" @click="remove(filelist.indexOf(file))"
                        title="Remove file">remove</button>
                </li>
            </ul>

            <!-- if editing product -->
            <div v-if="gallery_images" v-cloak class="image flex gap-3">

                <div class="text-sm mt-4" v-for="file in gallery_images" :key="file.name">

                     <div class="relative">
                         <img :src="file.image" alt="" style="width:60px" srcset="">
                         <button @click="remove_exist_image(file)" class="imgdelete">x</button>
                     </div>

                </div>

            </div>

            <template>

               <!-- <div v-if="!filelist.length" class="my-3 mr-2 flex items-center justify-center">
                 <img :src="websiteaddress+'images/upload-icon.png'" alt="" style="width:70px" srcset="">
              </div> -->

               <!-- <div v-if="!filelist.length" class="my-3 mr-2 flex items-center justify-center">
                <img :src="websiteaddress+'images/upload-icon.png'" alt="" style="width:70px" srcset="">
              </div> -->

            </template>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
   export default {
      props:['gallery_images'],
     data: () => ({
      filelist:[],
      files:[],
      isEditingImage:false

      }),

        methods: {
              addFile(e) {
                let droppedFiles = e.dataTransfer.files;
                if(!droppedFiles) return;
                 e.currentTarget.classList.add('bg-green-300');

                ([...droppedFiles]).forEach(f => {
                    this.files.push(f);
                });

                },
                removeFile(file){
                this.files = this.files.filter(f => {
                    return f != file;
                });
                },

                onChange() {
                    this.filelist = [...this.$refs.file.files];
                    // console.log(this.filelist);
                    this.$emit('new_images',this.filelist);
                   },

                    remove(i) {
                    this.filelist.splice(i, 1);
                    },
                    dragover(event) {
                    event.preventDefault();
                    // Add some visual fluff to show the user can drop its files
                    if (!event.currentTarget.classList.contains('bg-green-300')) {
                        event.currentTarget.classList.remove('bg-gray-100');
                        event.currentTarget.classList.add('bg-green-300');
                    }
                    },
                    dragleave(event) {
                    // Clean up
                    event.currentTarget.classList.add('bg-gray-100');
                    event.currentTarget.classList.remove('bg-green-300');
                    },
                    drop(event) {
                    event.preventDefault();
                    this.$refs.file.files = event.dataTransfer.files;
                    this.onChange(); // Trigger the onChange event manually
                    // Clean up
                    event.currentTarget.classList.add('bg-gray-100');
                    event.currentTarget.classList.remove('bg-green-300');
                  },

            remove_exist_image(image){

                axios.post(`/api/product/image/delete/${image.id}`).then(res => {

                    let index = this.gallery_images.indexOf(image);
                    this.gallery_images.splice(index, 1);

                })
            }
        },

        mounted(){

            if(this.gallery_images){
            //   alert('yes')
            }
            else{
             this.isEditingImage == true
            }
        }
    }
</script>

<style scoped>

.imgdelete {
    position: absolute;
    top: -7px !important;
    left: -4px !important;
    background: red;
    color: white;
    border-radius: 70px !important;
    width: 20px !important;
}

</style>



