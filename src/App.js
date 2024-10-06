import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// page 컴포넌트, 템플릿 페이지
import Menulist from './page/Menulist';
import Button from './page/Button';
import Cards from './page/Cards';
import Inputfield from './page/Inputfield';
import Label from './page/Label';
import Menu from './page/Menu';
import Popup from './page/Popup';
import Selector from './page/Selector';
import Tab from './page/Tab';
import Table from './page/Table';
import TemplateLogin from './page/TemplateLogin';
import TemplateNotFound from './page/TemplateNotFound';
import TemplateDashboardOne from './page/TemplateDashboardOne';
import TemplateDashboardTwo from './page/TemplateDashboardTwo';
import TemplateTable from './page/TemplateTable';
import TemplatePopup from './page/TemplatePopup';
import TemplateCardGrid from './page/TemplateCardGrid';
import TemplateMap from './page/TemplateMap';

// pages 필리핀 페이지
import Login from './pages/Login';
import Page404 from './pages/Page404';
import CommonLayout1 from './pages/CommonLayout1';
import CommonLayout2 from './pages/CommonLayout2';
import CommonLayout3 from './pages/CommonLayout3';
import CommonLayout4 from './pages/CommonLayout4';
import DashBoard1 from './pages/DashBoard1';
import DashBoard2 from './pages/DashBoard2';
import TerminalRevision from './pages/TerminalRevision';
import FareInformation from './pages/FareInformation';
import TransferInformation from './pages/TransferInformation';
import SettlementResults from './pages/SettlementResults';
import MenuInformation from './pages/MenuInformation';
import AverageRevenue from './pages/AverageRevenue';
import ExternalTransmission from './pages/ExternalTransmission';
import WorkHistory from './pages/WorkHistory';
import TransferGroupInfo from './pages/TransferGroupInfo';
import UserInformation from './pages/UserInformation';
import CodeInformation from './pages/CodeInformation';


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path={"*"} element={<Page404 />} />

                {/* 공통 레이아웃 페이지 */}
                <Route path="/common1" element={<CommonLayout1 />} />
                <Route path="/common2" element={<CommonLayout2 />} />
                <Route path="/common3" element={<CommonLayout3 />} />
                <Route path="/common4" element={<CommonLayout4 />} />

                {/* 기타 디자인 페이지 */}
                <Route path="/dashboard1" element={<DashBoard1 />} />
                <Route path="/dashboard2" element={<DashBoard2 />} />
                <Route path="/fareinfo" element={<FareInformation />} />
                <Route path="/terminalrevision" element={<TerminalRevision />} />
                <Route path="/transferinfo" element={<TransferInformation />} />
                <Route path="/settlementresults" element={<SettlementResults />} />
                <Route path="/menuinfo" element={<MenuInformation />} />
                <Route path="/averagerevenue" element={<AverageRevenue />} />
                <Route path="/externaltransmission" element={<ExternalTransmission />} />

                {/* 기타 개발화면 페이지 */}
                <Route path="/workhistory" element={<WorkHistory />} />
                <Route path="/transfergroupinfo" element={<TransferGroupInfo />} />
                <Route path="/userinfo" element={<UserInformation />} />
                <Route path="/codeinfo" element={<CodeInformation />} />

                {/* 컴포넌트, 템플릿 페이지 */}
                {/* <Route path={'/'} element={<Menulist />} /> */}
                <Route path={'/button'} element={<Button />} />
                <Route path={'/cards'} element={<Cards />} />
                <Route path={'/inputfield'} element={<Inputfield />} />
                <Route path={'/label'} element={<Label />} />
                <Route path={'/menu'} element={<Menu />} />
                <Route path={'/popup'} element={<Popup />} />
                <Route path={'/selector'} element={<Selector />} />
                <Route path={'/tab'} element={<Tab />} />
                <Route path={'/table'} element={<Table />} />
                <Route path={'/templlogin'} element={<TemplateLogin />} />
                <Route path={'/templ404'} element={<TemplateNotFound />} />
                <Route path={'/templdashboard1'} element={<TemplateDashboardOne />} />
                <Route path={'/templdashboard2'} element={<TemplateDashboardTwo />} />
                <Route path={'/templatetable'} element={<TemplateTable />} />
                <Route path={'/templatepopup'} element={<TemplatePopup />} />
                <Route path={'/templcardgrid'} element={<TemplateCardGrid />} />
                <Route path={'/templatemap'} element={<TemplateMap />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
