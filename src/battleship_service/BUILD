package(default_visibility = ["//visibility:public"])

load("@com_grail_bazel_compdb//:aspects.bzl", "compilation_database")

cc_library(
    name = "battleship_service_impl",
    srcs = [
        "battleship_service_impl.cc",
        "battleship_service_impl.h",
            ],
    deps = [
        "//src/battleship_service/proto:services_grpc_proto",
        "//src/battleship_game:game",
        "//src/battleship_game:event",
        "@com_github_grpc_grpc//:grpc++",
        "//src/util:status_macros"
    ],
)


cc_binary(
    name = "server",
    srcs = ["server.cc"],
    deps = [
        ":battleship_service_impl",
        "//src/battleship_game:game",
        "@com_github_grpc_grpc//:grpc++",
        "//src/battleship_service/proto:services_grpc_proto",
        "@com_github_grpc_grpc//:grpc++_reflection",
    ],
)

## Replace workspace_name and dir_path as per your setup.


compilation_database(
    name = "server_compdb",
    targets = [
        ":server",
        ":battleship_service_impl",
    ],
    # ideally should be the same as `bazel info execution_root`.
    exec_root = "/home/tom/.cache/bazel/_bazel_tom/3cfb4698215cbccf38ee837b1b31e3a9/execroot/com_github_tom_battleship",
)
