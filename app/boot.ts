import {AppComponent} from './app.component'
import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_BINDINGS} from 'angular2/http'
import {SearchService} from './services/Search'

bootstrap(AppComponent, [HTTP_BINDINGS, SearchService]);