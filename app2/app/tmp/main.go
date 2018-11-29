// GENERATED CODE - DO NOT EDIT
package main

import (
	"flag"
	"reflect"
	"github.com/revel/revel"
	_ "app2/app"
	controllers "app2/app/controllers"
	tests "app2/tests"
	controllers0 "github.com/revel/modules/static/app/controllers"
	_ "github.com/revel/modules/testrunner/app"
	controllers1 "github.com/revel/modules/testrunner/app/controllers"
	"github.com/revel/revel/testing"
)

var (
	runMode    *string = flag.String("runMode", "", "Run mode.")
	port       *int    = flag.Int("port", 0, "By default, read from app.conf")
	importPath *string = flag.String("importPath", "", "Go Import Path for the app.")
	srcPath    *string = flag.String("srcPath", "", "Path to the source root.")

	// So compiler won't complain if the generated code doesn't reference reflect package...
	_ = reflect.Invalid
)

func main() {
	flag.Parse()
	revel.Init(*runMode, *importPath, *srcPath)
	revel.INFO.Println("Running revel server")
	
	revel.RegisterController((*controllers.CMedHistory)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Create",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "surname", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "name", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "pid", Type: reflect.TypeOf((*int64)(nil)) },
					&revel.MethodArg{Name: "text", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Read",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "pid", Type: reflect.TypeOf((*int64)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.CPatient)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Read",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "sur", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Create",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "sur", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "name", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "midname", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "city", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "street", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "home", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "flat", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "tel", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "age", Type: reflect.TypeOf((*int)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.App)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Index",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					10: []string{ 
					},
				},
			},
			
		})
	
	revel.RegisterController((*controllers.CAppoitment)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Create",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "surnameP", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "nameP", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "idP", Type: reflect.TypeOf((*int64)(nil)) },
					&revel.MethodArg{Name: "idD", Type: reflect.TypeOf((*int64)(nil)) },
					&revel.MethodArg{Name: "date", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Read",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "idD", Type: reflect.TypeOf((*int64)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers.CDoctor)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Read",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "sur", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers0.Static)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Serve",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "prefix", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "filepath", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "ServeModule",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "moduleName", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "prefix", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "filepath", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.RegisterController((*controllers1.TestRunner)(nil),
		[]*revel.MethodType{
			&revel.MethodType{
				Name: "Index",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
					72: []string{ 
						"testSuites",
					},
				},
			},
			&revel.MethodType{
				Name: "Suite",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "suite", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			&revel.MethodType{
				Name: "Run",
				Args: []*revel.MethodArg{ 
					&revel.MethodArg{Name: "suite", Type: reflect.TypeOf((*string)(nil)) },
					&revel.MethodArg{Name: "test", Type: reflect.TypeOf((*string)(nil)) },
				},
				RenderArgNames: map[int][]string{ 
					125: []string{ 
					},
				},
			},
			&revel.MethodType{
				Name: "List",
				Args: []*revel.MethodArg{ 
				},
				RenderArgNames: map[int][]string{ 
				},
			},
			
		})
	
	revel.DefaultValidationKeys = map[string]map[int]string{ 
	}
	testing.TestSuites = []interface{}{ 
		(*tests.AppTest)(nil),
	}

	revel.Run(*port)
}
