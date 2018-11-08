/**
 * 页面通用store，包含一般的loading，如果存在table页面，total和page，pageSize都会放在这里面
 */
import { observable, action, runInAction } from 'mobx';

export default class BaseCommonData {
  @observable
  loading = false; // 数据加载标识

  // to extends
  doFetchData = params => {
    // todo
  };

  /**
   * 请求基本数据的action
   * @return {Promise<void>} 返回一个promise对象
   */
  @action
  fetchData = async ({ ...params }) => {
    this.loading = true;
    const data = await this.doFetchData({
      ...params
    });
    if (data) {
      runInAction('fetch tableData success', () => {
        this.loading = false;
      });
    } else {
      runInAction('fetch tableData error', () => {
        this.loading = false;
      });
    }
  };
}
