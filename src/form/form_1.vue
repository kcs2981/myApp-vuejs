<template>
    <div class="ov_z">
        <!--当前位置 start-->
        <div class="page_location_a mg_t15 ov_z">
            <ul>
                <li><a href="javascript:;"><span class="d_i_b fl">表单</span><i class="icon_arrow icon_bg d_i_b fl"></i></a></li>
                <li class="active"><a href="javascript:;"><span class="d_i_b fl">单列</span></a></li>
            </ul>
        </div>
        <!--当前位置 start-->

        <!--单列50%宽 start-->
        <div class="ov_z wid_100p pd_b30">
            <form action="" name="">
                <div class="ov_z bg_fa pd_b30">
                    <h3 class="font_16 font_b mg_b22 line_h48 bor_b_d_c pd_l15">form宽度50% 居中</h3>
                    <div class="ov_z wid_50p pd_l30 pd_r30 mg_c">
                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">Password：</label>
                            <div class="ov_z fl wid_65P">
                                <input type="password" placeholder="Password" class="form_input">
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">tel：</label>
                            <div class="ov_z fl wid_65P"><input type="tel" placeholder="tel" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">email：</label>
                            <div class="ov_z fl wid_65P"><input type="email" placeholder="email" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">text：</label>
                            <div class="ov_z fl wid_65P"><input type="text" placeholder="text" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">textarea：</label>
                            <div class="ov_z fl wid_65P"><textarea class="form_input" name="" placeholder="textarea"></textarea></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">error：</label>
                            <div class="ov_z fl wid_65P"><input type="text" placeholder="error" class="form_input error"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">warning：</label>
                            <div class="ov_z fl wid_65P"><input type="text" placeholder="warning" class="form_input warning"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">select：</label>
                            <div class="ov_z fl wid_65P">
                                <select class="form_input" name="">
                                    <option class="dn" value="">请选择</option>
                                    <option value="select_1">select_1</option>
                                    <option value="select_2">select_2</option>
                                    <option value="select_3">select_3</option>
                                    <option value="select_4">select_4</option>
                                    <option value="select_5">select_5</option>
                                </select>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">多选框行内排序：</label>
                            <div class="ov_z fl wid_65P">
                                <div class="checkbox_a">
                                    <div class="checkbox_a_ui"></div>
                                    <input placeholder="" type="checkbox" class="checkbox_a_input" value="" name="checkbox_1" />
                                    <span>未选</span>
                                </div>
                                <div class="checkbox_a checked">
                                    <div class="checkbox_a_ui"></div>
                                    <input placeholder="" checked="checked" type="checkbox" class="checkbox_a_input" value="" name="checkbox_1" />
                                    <span>已选</span>
                                </div>
                                <div class="checkbox_a disabled">
                                    <div class="checkbox_a_ui"></div>
                                    <input placeholder="" type="checkbox" class="checkbox_a_input" value="" name="checkbox_1" />
                                    <span>disabled未选择</span>
                                </div>
                                <div class="checkbox_a disabled checked">
                                    <div class="checkbox_a_ui"></div>
                                    <input placeholder="" checked="checked" type="checkbox" class="checkbox_a_input" value="" name="checkbox_1" />
                                    <span>disabled已选择</span>
                                </div>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">多选框多行排序：</label>
                            <div class="ov_z fl wid_65P">
                                <div class="ov_z">
                                    <div class="checkbox_a">
                                        <div class="checkbox_a_ui"></div>
                                        <input placeholder="" type="checkbox" class="checkbox_a_input" value="" name="checkbox_2" />
                                        <span>未选</span>
                                    </div>
                                </div>
                                <div class="ov_z">
                                    <div class="checkbox_a checked">
                                        <div class="checkbox_a_ui"></div>
                                        <input placeholder="" checked="checked" type="checkbox" class="checkbox_a_input" value="" name="checkbox_2" />
                                        <span>已选</span>
                                    </div>
                                </div>
                                <div class="ov_z">
                                    <div class="checkbox_a disabled">
                                        <div class="checkbox_a_ui"></div>
                                        <input placeholder="" type="checkbox" class="checkbox_a_input" value="" name="checkbox_2" />
                                        <span>disabled未选择</span>
                                    </div>
                                </div>
                                <div class="ov_z">
                                    <div class="checkbox_a disabled checked">
                                        <div class="checkbox_a_ui"></div>
                                        <input placeholder="" checked="checked" type="checkbox" class="checkbox_a_input" value="" name="checkbox_2" />
                                        <span>disabled已选择</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">单选框行内排序：</label>
                            <div class="ov_z fl wid_65P">
                                <div class="radio_box_a">
                                    <div class="radio_box_a_ui"></div>
                                    <input placeholder="" type="radio" class="radio_box_a_input" value="radio_1" name="radioBox_3" />
                                    <span>radio_1未选</span>
                                </div>
                                <div class="radio_box_a checked">
                                    <div class="radio_box_a_ui"></div>
                                    <input placeholder="" checked="checked" type="radio" class="radio_box_a_input" value="radio_2" name="radioBox_3" />
                                    <span>radio_2已选</span>
                                </div>
                                <div class="radio_box_a disabled">
                                    <div class="radio_box_a_ui"></div>
                                    <input placeholder="" type="radio" class="radio_box_a_input" value="radio_3" name="radioBox_4" />
                                    <span>radio_3-disabled未选择</span>
                                </div>
                                <div class="radio_box_a disabled checked">
                                    <div class="radio_box_a_ui"></div>
                                    <input placeholder="" checked="checked" type="radio" class="radio_box_a_input" value="radio_4" name="radioBox_4" />
                                    <span>radio_4-disabled已选择</span>
                                </div>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">单选框多行排序：</label>
                            <div class="ov_z fl wid_65P">
                                <div class="ov_z">
                                    <div class="radio_box_a">
                                        <div class="radio_box_a_ui"></div>
                                        <input placeholder="" type="radio" class="radio_box_a_input" value="radio_5" name="radioBox_1" />
                                        <span>radio_5未选</span>
                                    </div>
                                </div>
                                <div class="ov_z">
                                    <div class="radio_box_a checked">
                                        <div class="radio_box_a_ui"></div>
                                        <input placeholder="" checked="checked" type="radio" class="radio_box_a_input" value="radio_6" name="radioBox_1" />
                                        <span>radio_6已选</span>
                                    </div>
                                </div>
                                <div class="ov_z">
                                    <div class="radio_box_a disabled">
                                        <div class="radio_box_a_ui"></div>
                                        <input placeholder="" type="radio" class="radio_box_a_input" value="radio_7" name="radioBox_2" />
                                        <span>radio_7-disabled未选择</span>
                                    </div>
                                </div>
                                <div class="ov_z">
                                    <div class="radio_box_a disabled checked">
                                        <div class="radio_box_a_ui"></div>
                                        <input placeholder="" checked="checked" type="radio" class="radio_box_a_input" value="radio_8" name="radioBox_2" />
                                        <span>radio_8-disabled已选择</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">多个text：</label>
                            <div class="ov_z fl wid_15P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_15P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_15P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_15P"><input type="text" placeholder="text" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_35P tr">混排：</label>
                            <div class="ov_z fl wid_65P">
                                <div class="checkbox_a">
                                    <div class="checkbox_a_ui"></div>
                                    <input placeholder="" type="checkbox" class="checkbox_a_input" value="" name="checkbox_3" />
                                    <span>未选</span>
                                </div>

                                <div class="checkbox_a checked">
                                    <div class="checkbox_a_ui"></div>
                                    <input placeholder="" checked="checked" type="checkbox" class="checkbox_a_input" value="" name="checkbox_3" />
                                    <span>已选</span>
                                </div>

                                <input class="btn_a btn_cancel fl mg_r15 mg_l14" type="button" value="取消" />
                                <input class="btn_a btn_submit fl" type="button" value="提交" />
                            </div>
                        </div>

                        <div class="ov_z form_div">
                            <div class="ov_z fr wid_65P">
                                <input class="btn_a btn_cancel fl mg_r15" type="reset" value="重置" />
                                <input class="btn_a btn_submit fl" type="button" value="提交" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!--单列50%宽 end-->



        <!--单列80%宽 start-->
        <div class="ov_z wid_100p pd_b30">
            <form action="" name="">
                <div class="ov_z bg_fa pd_b30">
                    <h3 class="font_16 font_b mg_b22 line_h48 bor_b_d_c pd_l15">form宽度80% 居中</h3>
                    <div class="ov_z wid_80p pd_l30 pd_r30 mg_c">
                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">Password带文字提示：</label>
                            <div class="ov_z fl wid_70P">
                                <input type="password" placeholder="Password" class="form_input">
                                <p class="mg_t7">请输入密码！</p>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">tel：</label>
                            <div class="ov_z fl wid_70P"><input type="tel" placeholder="tel" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">email：</label>
                            <div class="ov_z fl wid_70P"><input type="email" placeholder="email" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">text：</label>
                            <div class="ov_z fl wid_70P"><input type="text" placeholder="text" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">textarea：</label>
                            <div class="ov_z fl wid_70P"><textarea class="form_input" name="" placeholder="textarea"></textarea></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">error：</label>
                            <div class="ov_z fl wid_70P"><input type="text" placeholder="error" class="form_input error"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">warning：</label>
                            <div class="ov_z fl wid_70P"><input type="text" placeholder="warning" class="form_input warning"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">select：</label>
                            <div class="ov_z fl wid_70P">
                                <select class="form_input" name="">
                                    <option class="dn" value="">请选择</option>
                                    <option value="select_1">select_1</option>
                                    <option value="select_2">select_2</option>
                                    <option value="select_3">select_3</option>
                                    <option value="select_4">select_4</option>
                                    <option value="select_5">select_5</option>
                                </select>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_30P tr">多个text：</label>
                            <div class="ov_z fl wid_15P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_15P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_15P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_15P"><input type="text" placeholder="text" class="form_input"></div>
                        </div>


                        <div class="ov_z form_div">
                            <div class="ov_z fr wid_70P">
                                <input class="btn_a btn_cancel fl mg_r15" type="reset" value="重置" />
                                <input class="btn_a btn_submit fl" type="button" value="提交" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!--单列80%宽 end-->


        <!--单列100%宽 start-->
        <div class="ov_z wid_100p pd_b30">
            <form action="" name="">
                <div class="ov_z bg_fa pd_b30">
                    <h3 class="font_16 font_b mg_b22 line_h48 bor_b_d_c pd_l15">form宽度100% 居中</h3>
                    <div class="ov_z wid_100p pd_l30 pd_r30 mg_c">
                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">Password带文字提示：</label>
                            <div class="ov_z fl wid_80p">
                                <input type="password" placeholder="Password" class="form_input">
                                <p class="mg_t7">请输入密码！</p>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">tel：</label>
                            <div class="ov_z fl wid_80p"><input type="tel" placeholder="tel" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">email：</label>
                            <div class="ov_z fl wid_80p"><input type="email" placeholder="email" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">text：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="text" class="form_input"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">textarea：</label>
                            <div class="ov_z fl wid_80p"><textarea class="form_input" name="" placeholder="textarea"></textarea></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">error：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="error" class="form_input error"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">warning：</label>
                            <div class="ov_z fl wid_80p"><input type="text" placeholder="warning" class="form_input warning"></div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">select：</label>
                            <div class="ov_z fl wid_80p">
                                <select class="form_input" name="">
                                    <option class="dn" value="">请选择</option>
                                    <option value="select_1">select_1</option>
                                    <option value="select_2">select_2</option>
                                    <option value="select_3">select_3</option>
                                    <option value="select_4">select_4</option>
                                    <option value="select_5">select_5</option>
                                </select>
                            </div>
                        </div>

                        <div class="ov_z form_div pd_b18">
                            <label class="fl form_label wid_20P tr">多个text：</label>
                            <div class="ov_z fl wid_20P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_20P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_20P pd_r15"><input type="text" placeholder="text" class="form_input"></div>
                            <div class="ov_z fl wid_20P"><input type="text" placeholder="text" class="form_input"></div>
                        </div>


                        <div class="ov_z form_div">
                            <div class="ov_z fr wid_80p">
                                <input class="btn_a btn_cancel fl mg_r15" type="reset" value="重置" />
                                <input class="btn_a btn_submit fl" type="button" value="提交" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!--单列100%宽 end-->
    </div>
</template>
<script>
    export default {
      name: 'form1'
    }
</script>

