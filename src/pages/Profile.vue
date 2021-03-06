<template>
  <div id="profile-page">
    <v-container v-if="user != null">
      <v-card
        class="mx-auto"
        flat 
        max-width="800"
        color="#23272A">
        <v-container>
          <v-card-title>
            <v-text-field
              v-if="isEditing"
              v-model="newUsername"
              :disabled="!isUsernameEditable"
              :hint="$t('Profile.usernameIsNotEditable')"
              :error-messages="!isUsernameEditable ? $t('Profile.usernameIsNotEditable') : ''"
              :label="$t('Profile.username')"
              maxlength="120"
              :value="newUsername"
              outlined
              color="#8E9297"
              background-color="#2F3136"
              dark></v-text-field>
            <span v-else>{{ user.username }}</span>
            <div class="flex-grow-1"></div>
            <v-btn 
              icon
              v-if="isMyProfile && !isEditing"
              @click="editProfile">
              <v-icon color="#8E9297">mdi-account-edit</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-textarea
                v-if="isEditing"
                v-model="newBio"
                :rules="bioRules"
                :label="$t('Profile.bio')"
                maxlength="500"
                :value="newBio"
                outlined
                color="#8E9297"
                background-color="#2F3136"
                dark></v-textarea>
              <div 
                class="user-bio"
                v-else>
                <span>{{ user.bio }}</span>
              </div>
            </v-container>
            <v-container
              class="pt-0" 
              v-if="isEditing">
              <v-row>
                <div class="flex-grow-1"></div>
                <v-btn 
                  text
                  color="#2F3136"
                  @click="updateProfile">
                  <span>{{ $t('Profile.save') }}</span>
                </v-btn>
                <v-btn 
                  text
                  color="#2F3136"
                  @click="cancel">
                  <span>{{ $t('Profile.cancel') }}</span>
                </v-btn>
              </v-row>
            </v-container>
            <v-divider color="#FFFFFF"></v-divider>
            <v-container>
              <v-row>
                <v-col cols="4">
                  <span>
                    <strong>{{ $t('Profile.win') }}: {{ getWin }}</strong>
                  </span>
                </v-col>
                <v-col cols="4">
                  <span>
                    <strong>{{ $t('Profile.lose') }}: {{ getLose }}</strong>
                  </span>
                </v-col>
                <v-col cols="4">
                  <span>
                    <strong>{{ $t('Profile.winRate') }}: {{ getWinRate(getWin, getLose) }} %</strong>
                  </span>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-simple-table dark>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        <span>{{ $t('Profile.role') }}</span>
                      </th>
                      <th class="text-left">
                        <span>{{ $t('Profile.win') }}</span>
                      </th>
                      <th class="text-left">
                        <span>{{ $t('Profile.lose') }}</span>
                      </th>
                      <th class="text-left">
                        <span>{{ $t('Profile.winRate') }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="background-color: #2F3136;">
                      <td>{{ $t('Profile.villager') }}</td>
                      <td>{{ user.villagerWin }}</td>
                      <td>{{ user.villagerLose }}</td>
                      <td>{{ getVillagerWinRate(user.villagerWin, user.villagerLose) }} %</td>
                    </tr>
                    <tr style="background-color: #2F3136;">
                      <td>{{ $t('Profile.werewolf') }}</td>
                      <td>{{ user.werewolfWin }}</td>
                      <td>{{ user.werewolfLose }}</td>
                      <td>{{ getWolfWinRate(user.werewolfWin, user.werewolfLose) }} %</td>
                    </tr>
                    <tr style="background-color: #2F3136;">
                      <td>{{ $t('Profile.seer') }}</td>
                      <td>{{ user.seerWin }}</td>
                      <td>{{ user.seerLose }}</td>
                      <td>{{ getSeerWinRate(user.seerWin, user.seerLose) }} %</td>
                    </tr>
                    <tr style="background-color: #2F3136;">
                      <td>{{ $t('Profile.medium') }}</td>
                      <td>{{ user.mediumWin }}</td>
                      <td>{{ user.mediumLose }}</td>
                      <td>{{ getMediumWinRate(user.mediumWin, user.mediumLose) }} %</td>
                    </tr>
                    <tr style="background-color: #2F3136;">
                      <td>{{ $t('Profile.knight') }}</td>
                      <td>{{ user.knightWin }}</td>
                      <td>{{ user.knightLose }}</td>
                      <td>{{ getKnightWinRate(user.knightWin, user.knightLose) }} %</td>
                    </tr>
                    <tr style="background-color: #2F3136;">
                      <td>{{ $t('Profile.minion') }}</td>
                      <td>{{ user.minionWin }}</td>
                      <td>{{ user.minionLose }}</td>
                      <td>{{ getMinionWinRate(user.minionWin, user.minionLose) }} %</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-container>
          </v-card-text>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import firebase from 'firebase/app'
  import 'firebase/firestore'

  export default {
    data() {
      return {
        isEditing: false,
        isMyProfile: false,
        valid: true,
        user: null,
        newUsername: '',
        newBio: '',
        bioRules: [
          v => {
            if (v.length > 500) {
              return this.$t('Profile.tooLong')
            } else {
              return true
            }
          }
        ],
      }
    },
    computed: {
      getWin() {
        var win = this.user.villagerWin + this.user.werewolfWin + this.user.seerWin + this.user.mediumWin + this.user.knightWin + this.user.minionWin
        return win
      },
      getLose() {
        var lose = this.user.villagerLose + this.user.werewolfLose + this.user.seerLose + this.user.mediumLose + this.user.knightLose + this.user.minionLose
        return lose
      },
      isUsernameEditable() {
        if (this.user.lastTimeUsernameEdited == null) {
          return true
        } else {
          var today = new Date()
          if (Math.floor((today - this.user.lastTimeUsernameEdited.toDate()) / (1000 * 60 * 60 * 24)) > 30) {
            return true
          } else {
            return false
          }
        }
      },
    },
    methods: {
      getWinRate(win, lose) {
        return Math.floor(win / (win + lose) * 100)
      },
      getVillagerWinRate(win, lose) {
        return Math.floor(win / (win + lose) * 100)
      },
      getWolfWinRate(win, lose) {
        return Math.floor(win / (win + lose) * 100)
      },
      getSeerWinRate(win, lose) {
        return Math.floor(win / (win + lose) * 100)
      },
      getMediumWinRate(win, lose) {
        return Math.floor(win / (win + lose) * 100)
      },
      getKnightWinRate(win, lose) {
        return Math.floor(win / (win + lose) * 100)
      },
      getMinionWinRate(win, lose) {
        return Math.floor(win / (win + lose) * 100)
      },
      editProfile() {
        this.isEditing = true
      },
      updateProfile() {
        this.isEditing = false
        var db = firebase.firestore()

        if (this.isUsernameEditable == false) {
          db.collection('users').doc(this.$route.params.uid).update({
            bio: this.newBio,
          })
          .then(() => {
            db.collection('users').doc(this.$route.params.uid).get().then((doc) => {
              this.user = doc.data()
            })          
          })          
        } else {
          db.collection('users').doc(this.$route.params.uid).update({
            username: this.newUsername,
            lastTimeUsernameEdited: firebase.firestore.FieldValue.serverTimestamp(),
            bio: this.newBio,
          })
          .then(() => {
            db.collection('users').doc(this.$route.params.uid).get().then((doc) => {
              this.user = doc.data()
            })          
          })
        }
      },
      cancel() {
        this.isEditing = false
      },
    },
    mounted() {
      var db = firebase.firestore()

      db.collection('users').doc(this.$route.params.uid).get().then((doc) => {
        this.user = doc.data()
        this.newUsername = doc.data().username
        this.newBio = doc.data().bio
      })

      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.uid == this.$route.params.uid) {
          this.isMyProfile = true
        } else {
          this.isMyProfile = false
        }
      })
    }
  }
</script>

<style scoped>
  tr {
    background-color: #2F3136;
  }

  th span {
    color: #8E9297;
  }

  span, strong {
    color: #FFFFFF;
  }

  #profile-page {
    position: relative;
    height: 100%;
    background-color: #23272A;
  }

  .user-bio {
    white-space: pre-wrap;
  }

  .user-bio span {
    color: #DCDDDE;
  }

  .v-divider {
    opacity: 0.06;
  }
</style>