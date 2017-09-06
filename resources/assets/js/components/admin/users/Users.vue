<template>
  <div>
    <div class="row">
      <alert></alert>
      <!-- <loader></loader> -->
      <div class="col-xs-6">
        <form @submit.prevent="reloadFromFirstPage">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for..." v-model="search">
              <span class="input-group-btn">
                <button class="btn btn-default" type="submit">Go!</button>
              </span>
            </div><!-- /input-group -->
          </form>
      </div><!-- /.col-xs-6 -->

      <div class="col-sm-4 col-xs-6 col-xs-offset-0 col-sm-offset-2" >
        <div class="input-group">
          <span class="input-group-btn">
            <button class="btn btn-default " type="button">
              <span class="small">RECORDS</span>
            </button>
          </span>
          <select class="form-control" v-model="records" @change="reloadFromFirstPage">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="100">100</option>
            <option value="100">500</option>
            <option value="100">1000</option>
          </select>
        </div><!-- /input-group -->
      </div>
    </div><!-- /.row -->
    <br>
    <div class="table-responsive">  
       <table class="table table-bordered">
       		<tbody>
          <tr>
            <th>Uid</th>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Total Receipts</th>
            <th>Go To</th>
            <th>Account Created At</th>
            <th>Expire At</th>
            <th>Status</th>
            <td>Actions</td>
            </tr>
       			<user v-for="user in users" :user="user" :key="user.id"></user>  
       		</tbody>
       </table>
    </div>
     <paginator :page-info="pageInfo"></paginator>
     <div class="form-group">
        <span class="btn btn-primary" @click="">Print <span v-if="printList.length" v-text="'(' + printList.length + ')'"></span> </span>
    </div>
     <iframe id="print-frame" class="hide" name="frame" src="" frameborder="0" @load="loadingComplete"></iframe>
    <div class="overlay" v-if="loading">
                <loader color="#337ab7"></loader>
    </div>


    <div class="modal fade" id="edit-user" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Edit User</h4>
                  </div>
                  <div class="modal-body">
                  <form class="form-horizontal">
                    <h3>User Info</h3>

                    <div class="">
                        <div class="col-xs-12">
                          <div class="form-group">
                            <label for="user-uid">User Uid</label>
                            <input type="text" id="user-uid" v-model="edit.uid" class="form-control" disabled>    
                          </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label for="user-name">User Name</label>
                            <input type="text" id="user-name" v-model="edit.name" class="form-control" placeholder="User Name">    
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label for="user-email">Email</label>
                            <input type="text" id="user-email" v-model="edit.email" class="form-control" placeholder="Sender Email">    
                          </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label for="user-type">Type</label>
                            <select id="user-type" v-model="edit.type" class="form-control"> 
                              <option value="user">User</option>
                              <option value="retailer">Retailer</option>
                              <option value="wholesaler">Wholesaler</option>
                              <option value="manufacturer">Manufacturer</option>
                            </select>   
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label for="total-receipts">Total Receipts</label>
                            <input type="text" id="total-receipts" v-model="edit.totalReceipts" class="form-control" placeholder="Sender Postcode" disabled>    
                          </div>
                        </div>
                        
                    </div>

                    <div class="">
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label for="status">Status</label>
                            <input type="text" id="status" :value="edit.activated ? 'Active': 'Deactive'" class="form-control" disabled> 
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label for="total-receipts">Expire At</label>
                            <input type="date" id="total-receipts" v-model="edit.expire_at" class="form-control" placeholder="Sender Postcode" >    
                          </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                  </form>

                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" @click="update">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
      </div>

   </div>

</template>

<script>
import Form from '../../../Form/Form';
import eventHub from '../../../eventHub';
import emptyUser from '../../../empty/User';
import emptyPageInfo from '../../../empty/PageInfo';

    export default {
    	data(){
    		return {
    			users: [],
          loadCount: 0,
          loading: false,
          printList: [],
          search: '',
          order: 'latest',
          records: 10,
          pageInfo: emptyPageInfo,
          edit: new Form(emptyUser),
          editIndex: '',
          scope: '/admin',
          scopeApi: '/api/admin',

    		}
    	},
      components: {
        user: require('./User.vue'),
        paginator: require('../../Paginator.vue')

      },
        mounted() {
            this.loadUsers();
            eventHub.$on('load-page', this.reload);
            eventHub.$on('edit-user', this.editUser);
            eventHub.$on('show-alert', { message: 'user success fully activates', status: 'success' });

        },
        methods: {
            loadUsers(){
                axios.get('/api/admin/users').then( res => {
                  this.users = res.data.data;
                  this.updatePageInfo(res.data);
                }).catch( err => {
                  this.showAlert('somthing went wrong');
                } )
            },
            
            loadingComplete(){
                      this.loading = false;
            },
            loadingFail(){
                    this.loading = false;
                    alert('Loading Failed')
            },
            updatePageInfo(info){
              this.pageInfo = info.meta.pagination;
            },

            reload(page){
              axios.get(`/api/admin/users?search=${this.search}&records=${this.records}&page=${page}`).then( res => {
                  this.users = res.data.data;
                  this.updatePageInfo(res.data);
                }).catch( err => {
                  alert(err);
                })
            },
            reloadFromFirstPage(){
              axios.get(`/api/admin/users?search=${this.search}&records=${this.records}`).then( res => {
                  this.users = res.data.data;
                  this.updatePageInfo(res.data);
                }).catch( err => {
                  alert(err);
                })
            },

            editUser(userId){
              this.editIndex = this.users.map(function(x) {return x.id; }).indexOf(userId); 
              this.copyToEdit(this.users[this.editIndex]);
              $('#edit-user').modal('show');
            },

            copyToEdit(user){
                this.edit.id = user.id;
                this.edit.name = user.name;
                this.edit.email = user.email;
                this.edit.uid = user.uid;
                this.edit.activated = user.activated;
                this.edit.type = user.type;
                this.edit.expire_at = user.expire_at;
                this.edit.totalReceipts = user.totalReceipts;
            },
            copyFromEdit(){
              let user = this.users[this.editIndex];

              user.id = this.edit.id;
              user.name = this.edit.name;
              user.email = this.edit.email;
              user.uid = this.edit.uid;
              user.activated = this.edit.activated;
              user.type = this.edit.type;
              user.expire_at = this.edit.expire_at;
              user.totalReceipts = this.edit.totalReceipts;


            },

            update(){
              this.loading = true;
              this.edit.post(`${this.scopeApi}/users/${this.edit.id}/update`).then( res => {
                this.loading = false;
                this.copyFromEdit();

                $('#edit-user').modal('hide');

                eventHub.$emit('alert-show', {message: 'receipt successfully edited' , status : 'success'});

              }).catch( err => {
                this.loading = false;
                let message = [];
                for(let name in this.edit.errors.errors){
                  console.log(name)
                  message.push(this.edit.errors.get(name));
                }
                console.log
                eventHub.$emit('alert-show', {message: message , status : 'error'});
                
              })

            }
        }
    }
</script>
