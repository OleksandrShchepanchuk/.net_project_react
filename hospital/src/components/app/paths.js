const RootPath = '/';

const ApplicationPaths = {
    RootPath,
    LoginPage: `${RootPath}login`,
    DepartmentsPage: `${RootPath}list-page`,
    DoctorInfoPage: `${RootPath}new-doctor-page`,
    NewsPage: `${RootPath}news`,
    VideoPage:`${RootPath}videos`,
}

Object.seal(ApplicationPaths);

export default ApplicationPaths;