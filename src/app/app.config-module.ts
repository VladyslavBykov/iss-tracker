import { NgModule, InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  pathIcon: string;
  issIcon: string;
  defaultZoom: number;
  googleApiUrl: string;
  iisApiUrl: string;
}

export const APP_DI_CONFIG: AppConfig = {
  pathIcon:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABX0lEQVQ4T43TvW+OURjH8U+9RcTSGsTQVhojKjFhsXev6EZiMEgsEomuQrRCjAZC4k+wVxNbB8ImomGweBkq1FvJj+vIncejnrOcnPvk+73P9bvOGfJ7nMN57Kj1/6ZXuIC7QwVfwklcG0AS+BTu40QETzCHWziAB+tIAh/GMqZwM4KMSI7jEUbwoo8k8B58xG48xFgTNMkRvMMWvClZ9gKP4ju24VngbHQFWT/FfnzBJmyt+UPBG/Gywf0ETbIXX7EBazX/Bf9LkO+bsYpZ7MLpKmelt7+9JbT9/O1ztWsnLmI7Pg0iSGDjVcKPyilzMnnb253eEwSeqOOnjOwnh+TxrUpLd/7c2K4g8EG8rvSfd9JOd/aVaLgu0i9JEwSewUKFttRtVdUdySG8xyQWc5IIAt/AZRzFvT5wyy6SY3icd4DrEVzF2XqNZ9aBmyTX/gpuh2klzGN6ALgruYP5n2oJS7K9P0cOAAAAAElFTkSuQmCC',
  issIcon:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADOElEQVRYR7XXR6heVRQF4C9gRDQW0AycGMUSxUImEguO1JEdUXQiVnAUSURMYsOGHUUc2BAiDiwDRXEiiogiiA7ECqKICsaBih1jsLDC2XByc9/v+8P/H3jw3j3n3rX22mvvfd4S269D8AX+wip8PNif+Z9LBl+8GVdjGV7ERnw0c9Tugz2B/P4b9uj2X8IafDkvEgGN7Be1yHvw3fA13sb181IiBMYiD/j3zQOX4/Z5pSPgW7G0k7iP/AZ82PbiiQ2zNmYIHIk7cQYq8lfRg4dDzHgFflmAxP44C6fhBOyCb3HepPSVCUPiLhyLr3BZF3mBP4eT8MdIOvLeTfgHZw4MGyNHudFq6qvgINy/QOTxwW04pUtHlWjAr8FxOB0p5XMGJD7FEWOVNOwDfToq8iF4np/aIn0S63Bh6x2fNBK34OwO8GfsvRgCOVMkokjJXpEXeJpVPFLg9e00sDESP2DfxRIoEns12U/uXkzkMdqu2LNFnu19cCjeXUCJ+CAm32ENU9AfGKajwDe1pnVBO3w3NuP5Vh1pZqVEQG/Fy3hkWgI5fxTuwINN7m8QZXrwt9rcyPkDsXygRNx/Kb7bGQJF4kok8oewuou8B8/jtXgCMV3Ws4hC742B59mkFAzfSVO5Dz9hJYbg8UYa0LXtxadx7yTwaQlUs3q91XTKs1bAj8f6acCnIXBYkzJGDIH8/I0HWlWMgV+Mh/9vii42BbkhpfTKE5kdIXE4fhzInvyvaPJfNakNT6PAcGT36Qjg43gG9+CSVpIZaFkTp+hiFSiy/Y3p9y4d5+MDbMELKPC891q70Pw6lo5pCAxJpPGkHb/S5kKGVVw/BH8T57Zr3Q53zGkJFIlEmib1WZM5/WGhyB/F0V06tiOxMwTGekp5IuO4ZL8Oj3XgeX5MG9cZYtsuurMikG/V7Ngdb7SbUEVe4CGUKftOVccsCRSJzIpe9gLPHSFjfT/8Wf93zJpAr0SN38ge8LTpAxp4pXHrPAj0JOKDqBHDVuQFnjJeNi8CRSKleeJI5AFP03pqngRCIveDlGhVR55tixz/zroKxspz6ImAZ6TfWIfnrUDhpETfbwPtYHxeG/8BeAbHbS25R5MAAAAASUVORK5CYII=',
  defaultZoom: 4,
  googleApiUrl: `https://maps.googleapis.com/maps/api/js?key=${environment.googleKey}`,
  iisApiUrl: 'http://api.open-notify.org/iss-now.json',
};

@NgModule({
  providers: [
    {
      provide: APP_CONFIG,
      useValue: APP_DI_CONFIG,
    },
  ],
})
export class AppConfigModule {}
