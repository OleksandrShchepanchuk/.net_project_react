const RootPath = '/';

const ApplicationPaths = {
    RootPath,
    LoginPage: `${RootPath}login`,
    DepartmentsPage: `${RootPath}list-page`,
    DoctorInfoPage: `${RootPath}new-doctor-page`,
}

Object.seal(ApplicationPaths);

export default ApplicationPaths;