package com.topdraw.nebula_bi.service;

import org.afflatus.infrastructure.common.IResultInfo;
import org.afflatus.infrastructure.common.ResultInfo;
import org.afflatus.utility.DruidUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class ActiveUserService {
	private final static Logger logger = LoggerFactory.getLogger(ActiveUserService.class);

	public static ActiveUserService getInstance() {
		return _instance;
	}
    private static ActiveUserService _instance = new ActiveUserService();
	private ActiveUserService() { logger.info("Initial ActiveUserService"); }

	public IResultInfo<Map<String, Object>> getActiveUser(Integer lPlatform, Date sDate, Date eDate) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		IResultInfo<Map<String, Object>> ri = null;
		Connection readConnection = null;
		try {
			readConnection = DruidUtil.getRandomReadConnection();


			String tabName = "bi_gscmcc_children_loginuser";
			String querySql = "SELECT a.*, CONVERT((a.login_new * 100 / a.login_uv), DECIMAL(18,2)) loginNewPrec, CONVERT((a.login_old  * 100 / a.login_uv), DECIMAL(18,2)) loginOldPrec "+
					" FROM "+tabName+" a WHERE day >= ? AND day <= ? AND platform_id = ? ORDER BY day desc";

			List<Map<String, Object>> retlist = DruidUtil.queryList(readConnection, querySql, dateFormat.format(sDate), dateFormat.format(eDate), lPlatform);

			ri = new ResultInfo<>("success", retlist, retlist.size(), null);
		} catch (SQLException e) {
			logger.error("getActiveUser error" + e.getMessage());
		} finally {
			DruidUtil.close(readConnection);
		}
		return ri;
	}
}