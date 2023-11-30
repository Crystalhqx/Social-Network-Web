package main

import (
	"fmt"
	"log"
	"net/http"

	"socialNetwork/backend"
	"socialNetwork/handler"
	"socialNetwork/util"
)

func main() {
	fmt.Println("started-service")
	config, err := util.LoadApplicationConfig("conf", "deploy.yml")
	if err != nil {
		panic(err)
	}
	// initialize ES and GCS client when start
	backend.InitElasticsearchBackend(config.ElasticsearchConfig)
	backend.InitGCSBackend(config.GCSConfig)

	log.Fatal(http.ListenAndServe(":8080", handler.InitRouter(config.TokenConfig)))
}
