# 栅格布局（GridLayout）
## 示例

### 基本形式

定义12栅格系统,repeat参数定义栅格列数,span参数定义列跨越的栅格数。

``` html
<u-grid>
	<u-grid-row :repeat="12">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">1/12</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="24">
		<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">2/24</div></u-grid-column>
		<u-grid-column :span="5"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">5/24</div></u-grid-column>
		<u-grid-column :span="7"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">7/24</div></u-grid-column>
		<u-grid-column :span="10"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">10/24</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="5">
		<u-grid-column :span="2"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">2/5</div></u-grid-column>
		<u-grid-column :span="3"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">3/5</div></u-grid-column>
	</u-grid-row>
</u-grid>
```
### gap参数定义间隔
```html
<u-grid  gap="small">
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">small</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">small</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">small</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">small</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">small</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">small</div></u-grid-column>
	</u-grid-row>
</u-grid>
<br>
<u-grid  gap="normal">
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">normal</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">normal</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">normal</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">normal</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">normal</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">normal</div></u-grid-column>
	</u-grid-row>
</u-grid>
<br>
<u-grid  gap="large">
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">large</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">large</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">large</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="3" >
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">large</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">large</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">large</div></u-grid-column>
	</u-grid-row>
</u-grid>
```
### offset参数定义列偏移
```html
<u-grid>
	<u-grid-row :repeat="12" >
		<u-grid-column :span="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/12</div></u-grid-column>
		<u-grid-column :span="4" :offset="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/12 offset=4</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="12" >
		<u-grid-column :span="3" :offset="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/12 offset=3</div></u-grid-column>
		<u-grid-column :span="3" :offset="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/12 offset=3</div></u-grid-column>
	</u-grid-row>
<u-grid>
```
### push,pull参数定义列排序
``` html
<u-grid>
	<u-grid-row :repeat="10">
		<u-grid-column :span="4" :push="6"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">6/10 push=6</div></u-grid-column>
		<u-grid-column :span="6" :pull="4"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">4/10 pull=4</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="10">
		<u-grid-column :span="2" :push="8"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">2/10 push=8</div></u-grid-column>
		<u-grid-column :span="3" :push="3"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">3/10 push=5</div></u-grid-column>
		<u-grid-column :span="5" :pull="5"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">5/10 push=5</div></u-grid-column>
	</u-grid-row>
</u-grid>
```
<!-- ### unit参数定义栅格单位
``` html
<u-grid>
	<u-grid-row unit="px">
		<u-grid-column :span="300"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">200px</div></u-grid-column>
		<u-grid-column :span="300" :offset="360"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">300px offset=360px</div></u-grid-column>
	</u-grid-row>
	<u-grid-row unit="px">
		<u-grid-column :span="360" :push="600"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">360px push=600px</div></u-grid-column>
		<u-grid-column :span="600" :pull="360"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">600 push=360px</div></u-grid-column>
	</u-grid-row>
</u-grid>
``` -->
### flex模式
#### 水平排列方式
``` html
<u-grid type="flex">
	<u-grid-row :repeat="6" place="flex-start flex-start">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">flex-start</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">flex-start</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">flex-start</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" place="center flex-start">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">center</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">center</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">center</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" place="flex-end flex-start">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">flex-end</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">flex-end</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">flex-end</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" place="space-between flex-start">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-between</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">space-between</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-between</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" place="space-around flex-start">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-around flex-start</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:6px;color:#fff;text-align:center">space-around flex-start</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:6px;color:#fff;text-align:center">space-around flex-start</div></u-grid-column>
	</u-grid-row>
</u-grid>
```
#### 垂直排列方式
``` html
<div style="height:600px;margin-top:20px;">
<u-grid gap="large" type="flex">
	<u-grid-row :repeat="6" place="center flex-start">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:5px;color:#fff;text-align:center">flex-start</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:20px;color:#fff;text-align:center">flex-start</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:30px;color:#fff;text-align:center">flex-start</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" place="center center">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:5px;color:#fff;text-align:center">center</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:20px;color:#fff;text-align:center">center</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:30px;color:#fff;text-align:center">center</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" place="center flex-end">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:5px;color:#fff;text-align:center">flex-end</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:20px;color:#fff;text-align:center">flex-end</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:30px;color:#fff;text-align:center">flex-end</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" place="center baseline">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:5px;color:#fff;text-align:center">baseline</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:20px;color:#fff;text-align:center">baseline</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:30px;color:#fff;text-align:center">baseline</div></u-grid-column>
	</u-grid-row>
	<u-grid-row :repeat="6" place="center stretch">
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:5px;color:#fff;text-align:center">stretch</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #78bbf6;padding:20px;color:#fff;text-align:center">stretch</div></u-grid-column>
		<u-grid-column :span="1"><div style="background: #67aaf5;padding:30px;color:#fff;text-align:center">stretch</div></u-grid-column>
	</u-grid-row>
</u-grid>
</div>
```

## Grid API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| gap | String | `normal` | 栅格之间的间隔 [列间隔 行间隔]<br>可选值: large(30px), normal(20px), small(10px), none(0px)|
| type | String | `undefined` | 布局模式，可选flex |

## Grid Row API
### Attrs/Props

| Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| repeat | Number | `24` | 划分的栅格数 |
| place | String | `flex-start flex-start` | flex布局的对齐方式 [水平 垂直] <br> 水平可选值: flex-start, flex-end, center, space-between, space-around<br> 垂直可选值: flex-start, flex-end, center, baseline, stretch|


## Grid Column API
### Attrs/Props

Attr/Prop | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| span | Number | `undefined` | 列跨越的栅格数 |
| offset | Number | `0` | 列左边间隔栅格数 |
| pull | Number | `undefined` | 列向左移动栅格数 |
| push | Number | `undefined` | 列向右移动栅格数 |