<template>
    <div>
        <h6>1. 기능선택</h6>
        <b-tabs pills active-nav-item-class="btn-outline-info border-0" nav-class="border border-bottom-0">
            <b-tab title="인증서 내보내기" title-item-class="w-50 text-center" active>
                <b-card>
                    스마트폰에 복사할 인증서를 선택하고, 비밀번호를 입력하세요. <br>
                    (인증서가 등록된 금융사의 정보를 불러올 수 있습니다.)
                </b-card>

                <h6 class="mt-4">2. 저장매체</h6>
                <b-form-radio-group id="radio-group-1" v-model="device" buttons button-variant="outline-info" class="w-100">
                    <b-form-radio value="0">
                        <img src="../assets/images/icon-hardware-check.png"
                             srcset="../assets/images/icon-hardware-check@2x.png 2x,
                                 ../assets/images/icon-hardware-check@3x.png 3x"><br>
                        하드디스크
                    </b-form-radio>
                    <b-form-radio value="1">
                        <img src="../assets/images/icon-usb-check.png"
                             srcset="../assets/images/icon-usb-check@2x.png 2x,
                                 ../assets/images/icon-usb-check@3x.png 3x"><br>
                        이동식디스크
                    </b-form-radio>
                </b-form-radio-group>

                <h6 class="mt-4">3. 인증서 선택</h6>
                <table class="table table-bordered table-hover text-center">
                    <thead class="thead-dark">
                    <tr>
                        <th>구분</th>
                        <th>사용자</th>
                        <th>만료일</th>
                        <th>발급기관</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, index) in ['은행/개인ㅇㅇㅇㅇㅇ','증권','은행/개인']" v-bind:key="item" :class="index===1 ? 'table-info' :''">
                        <td class="text-left">
                            <div class="text-truncate" style="width: 98px;">
                                <img v-if="index===0" class="mr-1" src="../assets/images/icon-cert.png"
                                     srcset="../assets/images/icon-cert@2x.png 2x,
                                     ../assets/images/icon-cert@3x.png 3x">
                                <img v-if="index===1" class="mr-1" src="../assets/images/icon-cert-info.png"
                                     srcset="../assets/images/icon-cert-info@2x.png 2x,
                                     ../assets/images/icon-cert-info@3x.png 3x">
                                <img v-if="index===2" class="mr-1" src="../assets/images/icon-cert-end.png"
                                     srcset="../assets/images/icon-cert-end@2x.png 2x,
                                     ../assets/images/icon-cert-end@3x.png 3x">
                                {{item}}
                            </div>
                        </td>
                        <td>김아연</td>
                        <td>2020년07월10일</td>
                        <td>
                            <div class="text-truncate" style="width: 80px;">SignKoreaaaaaaa</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h6 class="mt-4">인증서 비밀번호</h6>
                <b-input type="password"></b-input>
            </b-tab>
            <b-tab title="인증서 가져오기" title-item-class="w-50 text-center">
                <b-card>
                    ※ 인증서 요청을 했습니다. 아래 인증번호를 인증서를 보내시려는 <br>
                    기기에 입력하여 주시고 인증서 선택 후 확인을 눌러주세요.
                </b-card>
                <h6 class="mt-4">2. 인증번호 생성</h6>
                <b-row no-gutters align-v="center">
                    <b-input class="col"></b-input>
                    <span class="px-2">-</span>
                    <b-input class="col"></b-input>
                    <span class="px-2">-</span>
                    <b-input class="col"></b-input>
                </b-row>
            </b-tab>
        </b-tabs>

    </div>
</template>

<script>
    export default {
        name: 'cert',
        data() {
            return {
                device : 0
            }
        }
    }
</script>
